import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { MailFromDomainStatusEnum } from "./mailfromdomainstatusenum";
/**
 * A list of attributes that are associated with a MAIL FROM domain.
**/
export declare class MailFromAttributes extends SpeakeasyBase {
    behaviorOnMxFailure: BehaviorOnMxFailureEnum;
    mailFromDomain: string;
    mailFromDomainStatus: MailFromDomainStatusEnum;
}
