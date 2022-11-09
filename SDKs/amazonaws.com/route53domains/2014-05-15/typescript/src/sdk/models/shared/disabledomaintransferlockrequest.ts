import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableDomainTransferLockRequest
/** 
 * The DisableDomainTransferLock request includes the following element.
**/
export class DisableDomainTransferLockRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
