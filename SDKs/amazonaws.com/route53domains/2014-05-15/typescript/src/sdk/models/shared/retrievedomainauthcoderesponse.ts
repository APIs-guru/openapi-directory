import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetrieveDomainAuthCodeResponse
/** 
 * The RetrieveDomainAuthCode response includes the following element.
**/
export class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthCode" })
  authCode: string;
}
