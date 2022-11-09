import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RejectDomainTransferFromAnotherAwsAccountRequest
/** 
 * The RejectDomainTransferFromAnotherAwsAccount request includes the following element.
**/
export class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
