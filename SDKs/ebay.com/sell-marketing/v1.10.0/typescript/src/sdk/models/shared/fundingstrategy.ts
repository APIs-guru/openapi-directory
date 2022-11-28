import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FundingStrategy
/** 
 * This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
**/
export class FundingStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingModel" })
  fundingModel?: string;
}
