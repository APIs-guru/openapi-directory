import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetrieveDomainAuthCodeResponse
/** 
 * The RetrieveDomainAuthCode response includes the following element.
**/
export class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthCode" })
  authCode: string;
}
