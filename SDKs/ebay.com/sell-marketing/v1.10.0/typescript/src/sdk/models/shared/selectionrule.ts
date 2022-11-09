import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";


// SelectionRule
/** 
 * This type specifies the selection rules used to create a campaign.
**/
export class SelectionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=brands" })
  brands?: string[];

  @Metadata({ data: "json, name=categoryIds" })
  categoryIds?: string[];

  @Metadata({ data: "json, name=categoryScope" })
  categoryScope?: string;

  @Metadata({ data: "json, name=listingConditionIds" })
  listingConditionIds?: string[];

  @Metadata({ data: "json, name=maxPrice" })
  maxPrice?: Amount;

  @Metadata({ data: "json, name=minPrice" })
  minPrice?: Amount;
}
