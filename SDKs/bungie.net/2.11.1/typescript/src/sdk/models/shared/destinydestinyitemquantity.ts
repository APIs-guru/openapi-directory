import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyDestinyItemQuantity
/** 
 * Used in a number of Destiny contracts to return data about an item stack and its quantity. Can optionally return an itemInstanceId if the item is instanced - in which case, the quantity returned will be 1. If it's not... uh, let me know okay? Thanks.
**/
export class DestinyDestinyItemQuantity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasConditionalVisibility?: boolean;

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  itemInstanceId?: number;

  @SpeakeasyMetadata()
  quantity?: number;
}
