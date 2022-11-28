import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiCallActionDomainDetails
/** 
 * Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
**/
export class AwsApiCallActionDomainDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;
}
