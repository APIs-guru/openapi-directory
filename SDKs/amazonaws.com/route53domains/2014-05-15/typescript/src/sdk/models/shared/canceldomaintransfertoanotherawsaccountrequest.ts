import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelDomainTransferToAnotherAwsAccountRequest
/** 
 * The CancelDomainTransferToAnotherAwsAccount request includes the following element.
**/
export class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
