import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferDomainToAnotherAwsAccountResponse
/** 
 * The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.
**/
export class TransferDomainToAnotherAwsAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;
}
