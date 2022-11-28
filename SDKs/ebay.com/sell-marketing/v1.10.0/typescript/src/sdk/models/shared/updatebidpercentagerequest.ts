import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateBidPercentageRequest
/** 
 * This type specifies the bid percentage for an ad campaign.
**/
export class UpdateBidPercentageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;
}
