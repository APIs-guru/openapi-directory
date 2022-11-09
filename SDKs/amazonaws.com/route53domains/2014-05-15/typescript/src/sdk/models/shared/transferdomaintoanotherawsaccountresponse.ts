import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferDomainToAnotherAwsAccountResponse
/** 
 * The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.
**/
export class TransferDomainToAnotherAwsAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;
}
