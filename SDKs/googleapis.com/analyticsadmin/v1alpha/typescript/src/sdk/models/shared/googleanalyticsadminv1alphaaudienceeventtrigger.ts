import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum {
    LogConditionUnspecified = "LOG_CONDITION_UNSPECIFIED"
,    AudienceJoined = "AUDIENCE_JOINED"
,    AudienceMembershipRenewed = "AUDIENCE_MEMBERSHIP_RENEWED"
}


// GoogleAnalyticsAdminV1alphaAudienceEventTrigger
/** 
 * Specifies an event to log when a user joins the Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudienceEventTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventName" })
  eventName?: string;

  @Metadata({ data: "json, name=logCondition" })
  logCondition?: GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
}
