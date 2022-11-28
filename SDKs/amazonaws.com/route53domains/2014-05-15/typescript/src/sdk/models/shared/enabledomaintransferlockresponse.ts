import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableDomainTransferLockResponse
/** 
 * The EnableDomainTransferLock response includes the following elements.
**/
export class EnableDomainTransferLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
