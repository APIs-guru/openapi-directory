import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectDomainTransferFromAnotherAwsAccountRequest
/** 
 * The RejectDomainTransferFromAnotherAwsAccount request includes the following element.
**/
export class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
