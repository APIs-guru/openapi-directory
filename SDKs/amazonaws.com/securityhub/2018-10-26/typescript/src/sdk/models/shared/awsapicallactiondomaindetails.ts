import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiCallActionDomainDetails
/** 
 * Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
**/
export class AwsApiCallActionDomainDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain?: string;
}
