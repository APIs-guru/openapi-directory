import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemCustomMetadata
/** 
 * Custom metadata associated with an item.
**/
export class ItemCustomMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
