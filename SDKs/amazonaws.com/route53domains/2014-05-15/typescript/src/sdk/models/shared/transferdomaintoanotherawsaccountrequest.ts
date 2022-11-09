import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferDomainToAnotherAwsAccountRequest
/** 
 * The TransferDomainToAnotherAwsAccount request includes the following elements.
**/
export class TransferDomainToAnotherAwsAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
