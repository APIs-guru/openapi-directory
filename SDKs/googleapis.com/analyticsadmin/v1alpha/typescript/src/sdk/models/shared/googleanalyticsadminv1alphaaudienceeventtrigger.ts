import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum {
    LogConditionUnspecified = "LOG_CONDITION_UNSPECIFIED",
    AudienceJoined = "AUDIENCE_JOINED",
    AudienceMembershipRenewed = "AUDIENCE_MEMBERSHIP_RENEWED"
}


// GoogleAnalyticsAdminV1alphaAudienceEventTrigger
/** 
 * Specifies an event to log when a user joins the Audience.
**/
export class GoogleAnalyticsAdminV1alphaAudienceEventTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=logCondition" })
  logCondition?: GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
}
