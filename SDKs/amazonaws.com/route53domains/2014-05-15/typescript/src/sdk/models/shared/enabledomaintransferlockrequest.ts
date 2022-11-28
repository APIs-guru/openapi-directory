import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableDomainTransferLockRequest
/** 
 * A request to set the transfer lock for the specified domain.
**/
export class EnableDomainTransferLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
