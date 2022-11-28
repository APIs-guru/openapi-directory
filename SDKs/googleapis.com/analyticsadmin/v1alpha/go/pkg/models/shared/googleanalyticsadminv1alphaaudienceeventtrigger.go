package shared

type GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum string

const (
	GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnumLogConditionUnspecified   GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum = "LOG_CONDITION_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnumAudienceJoined            GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum = "AUDIENCE_JOINED"
	GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnumAudienceMembershipRenewed GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum = "AUDIENCE_MEMBERSHIP_RENEWED"
)

// GoogleAnalyticsAdminV1alphaAudienceEventTrigger
// Specifies an event to log when a user joins the Audience.
type GoogleAnalyticsAdminV1alphaAudienceEventTrigger struct {
	EventName    *string                                                          `json:"eventName,omitempty"`
	LogCondition *GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum `json:"logCondition,omitempty"`
}
