import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FundingStrategy
/** 
 * This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
**/
export class FundingStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @Metadata({ data: "json, name=fundingModel" })
  fundingModel?: string;
}
