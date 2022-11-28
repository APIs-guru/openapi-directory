import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddCreativeRequest
/** 
 * Request message for adding creative to be used in the bidding process for the finalized deal.
**/
export class AddCreativeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creative" })
  creative?: string;
}
