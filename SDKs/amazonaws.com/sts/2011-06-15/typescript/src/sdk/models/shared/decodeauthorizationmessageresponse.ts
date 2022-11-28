import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecodeAuthorizationMessageResponse
/** 
 * A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an Amazon Web Services request.
**/
export class DecodeAuthorizationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  decodedMessage?: string;
}
