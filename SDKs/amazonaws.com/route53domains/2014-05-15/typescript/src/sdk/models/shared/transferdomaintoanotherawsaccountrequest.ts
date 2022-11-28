import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferDomainToAnotherAwsAccountRequest
/** 
 * The TransferDomainToAnotherAwsAccount request includes the following elements.
**/
export class TransferDomainToAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
