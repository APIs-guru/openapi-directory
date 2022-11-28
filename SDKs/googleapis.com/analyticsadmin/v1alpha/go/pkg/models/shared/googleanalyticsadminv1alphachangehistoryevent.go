package shared

type GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumActorTypeUnspecified GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "ACTOR_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumUser                 GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "USER"
	GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumSystem               GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "SYSTEM"
	GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumSupport              GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "SUPPORT"
)

// GoogleAnalyticsAdminV1alphaChangeHistoryEvent
// A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
type GoogleAnalyticsAdminV1alphaChangeHistoryEvent struct {
	ActorType       *GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum `json:"actorType,omitempty"`
	ChangeTime      *string                                                     `json:"changeTime,omitempty"`
	Changes         []GoogleAnalyticsAdminV1alphaChangeHistoryChange            `json:"changes,omitempty"`
	ChangesFiltered *bool                                                       `json:"changesFiltered,omitempty"`
	ID              *string                                                     `json:"id,omitempty"`
	UserActorEmail  *string                                                     `json:"userActorEmail,omitempty"`
}
