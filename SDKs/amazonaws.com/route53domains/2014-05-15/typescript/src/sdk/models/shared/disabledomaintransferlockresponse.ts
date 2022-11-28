import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableDomainTransferLockResponse
/** 
 * The DisableDomainTransferLock response includes the following element.
**/
export class DisableDomainTransferLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
