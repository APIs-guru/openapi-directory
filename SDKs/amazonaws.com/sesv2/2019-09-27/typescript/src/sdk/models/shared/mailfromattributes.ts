import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { MailFromDomainStatusEnum } from "./mailfromdomainstatusenum";


// MailFromAttributes
/** 
 * A list of attributes that are associated with a MAIL FROM domain.
**/
export class MailFromAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=BehaviorOnMxFailure" })
  behaviorOnMxFailure: BehaviorOnMxFailureEnum;

  @Metadata({ data: "json, name=MailFromDomain" })
  mailFromDomain: string;

  @Metadata({ data: "json, name=MailFromDomainStatus" })
  mailFromDomainStatus: MailFromDomainStatusEnum;
}
