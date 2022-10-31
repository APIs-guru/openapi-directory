package shared




type GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum string

const (
    GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumActorTypeUnspecified GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "ACTOR_TYPE_UNSPECIFIED"
GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumUser GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "USER"
GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumSystem GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "SYSTEM"
GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnumSupport GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum = "SUPPORT"
)


type GoogleAnalyticsAdminV1alphaChangeHistoryEvent struct {
    ActorType *GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum `json:"actorType,omitempty"`
    ChangeTime *string `json:"changeTime,omitempty"`
    Changes []GoogleAnalyticsAdminV1alphaChangeHistoryChange `json:"changes,omitempty"`
    ChangesFiltered *bool `json:"changesFiltered,omitempty"`
    ID *string `json:"id,omitempty"`
    UserActorEmail *string `json:"userActorEmail,omitempty"`
    
}

