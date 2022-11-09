import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddCreativeRequest
/** 
 * Request message for adding creative to be used in the bidding process for the finalized deal.
**/
export class AddCreativeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creative" })
  creative?: string;
}
