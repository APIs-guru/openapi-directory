import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// SelectionRule
/** 
 * This type specifies the selection rules used to create a campaign.
**/
export class SelectionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brands" })
  brands?: string[];

  @SpeakeasyMetadata({ data: "json, name=categoryIds" })
  categoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=categoryScope" })
  categoryScope?: string;

  @SpeakeasyMetadata({ data: "json, name=listingConditionIds" })
  listingConditionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxPrice" })
  maxPrice?: Amount;

  @SpeakeasyMetadata({ data: "json, name=minPrice" })
  minPrice?: Amount;
}
