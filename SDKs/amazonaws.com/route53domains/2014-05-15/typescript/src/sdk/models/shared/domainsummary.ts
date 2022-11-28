import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainSummary
/** 
 * Summary information about one domain.
**/
export class DomainSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=Expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransferLock" })
  transferLock?: boolean;
}
