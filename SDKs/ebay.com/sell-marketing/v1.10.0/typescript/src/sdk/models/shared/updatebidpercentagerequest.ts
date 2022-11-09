import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateBidPercentageRequest
/** 
 * This type specifies the bid percentage for an ad campaign.
**/
export class UpdateBidPercentageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;
}
