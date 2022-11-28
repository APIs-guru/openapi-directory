import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";



// GetSessionTokenResponse
/** 
 * Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
export class GetSessionTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Credentials;
}
