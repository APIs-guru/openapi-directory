import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcceptDomainTransferFromAnotherAwsAccountRequest
/** 
 * The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
**/
export class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=Password" })
  password: string;
}
