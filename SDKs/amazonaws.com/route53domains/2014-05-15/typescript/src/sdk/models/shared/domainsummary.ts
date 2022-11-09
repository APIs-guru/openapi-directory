import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainSummary
/** 
 * Summary information about one domain.
**/
export class DomainSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=Expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=TransferLock" })
  transferLock?: boolean;
}
