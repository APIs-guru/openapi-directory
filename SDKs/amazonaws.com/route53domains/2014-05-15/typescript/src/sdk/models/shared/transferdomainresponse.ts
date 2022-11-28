import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferDomainResponse
/** 
 * The TransferDomain response includes the following element.
**/
export class TransferDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
