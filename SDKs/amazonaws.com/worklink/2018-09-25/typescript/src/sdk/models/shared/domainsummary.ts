import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";



// DomainSummary
/** 
 * The summary of the domain.
**/
export class DomainSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=DomainStatus" })
  domainStatus: DomainStatusEnum;
}
