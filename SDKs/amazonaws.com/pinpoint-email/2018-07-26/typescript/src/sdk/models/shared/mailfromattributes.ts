import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { MailFromDomainStatusEnum } from "./mailfromdomainstatusenum";



// MailFromAttributes
/** 
 * A list of attributes that are associated with a MAIL FROM domain.
**/
export class MailFromAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BehaviorOnMxFailure" })
  behaviorOnMxFailure: BehaviorOnMxFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=MailFromDomain" })
  mailFromDomain: string;

  @SpeakeasyMetadata({ data: "json, name=MailFromDomainStatus" })
  mailFromDomainStatus: MailFromDomainStatusEnum;
}
