import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetrieveDomainAuthCodeRequest
/** 
 * A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
**/
export class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
