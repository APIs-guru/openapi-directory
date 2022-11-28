import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum {
    LogConditionUnspecified = "LOG_CONDITION_UNSPECIFIED",
    AudienceJoined = "AUDIENCE_JOINED",
    AudienceMembershipRenewed = "AUDIENCE_MEMBERSHIP_RENEWED"
}
/**
 * Specifies an event to log when a user joins the Audience.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceEventTrigger extends SpeakeasyBase {
    eventName?: string;
    logCondition?: GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
}
