import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableDomainTransferLockRequest
/** 
 * The DisableDomainTransferLock request includes the following element.
**/
export class DisableDomainTransferLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
