import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptDomainTransferFromAnotherAwsAccountRequest
/** 
 * The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
**/
export class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;
}
