import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelDomainTransferToAnotherAwsAccountRequest
/** 
 * The CancelDomainTransferToAnotherAwsAccount request includes the following element.
**/
export class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
