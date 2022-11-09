import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableDomainTransferLockRequest
/** 
 * A request to set the transfer lock for the specified domain.
**/
export class EnableDomainTransferLockRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
