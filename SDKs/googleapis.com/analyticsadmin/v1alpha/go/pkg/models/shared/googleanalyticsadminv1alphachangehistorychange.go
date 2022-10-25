package shared

type GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum string

const (
	GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnumActionTypeUnspecified GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnumCreated               GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum = "CREATED"
	GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnumUpdated               GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum = "UPDATED"
	GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnumDeleted               GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum = "DELETED"
)

type GoogleAnalyticsAdminV1alphaChangeHistoryChange struct {
	Action               *GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum            `json:"action,omitempty"`
	Resource             *string                                                              `json:"resource,omitempty"`
	ResourceAfterChange  *GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource `json:"resourceAfterChange,omitempty"`
	ResourceBeforeChange *GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource `json:"resourceBeforeChange,omitempty"`
}
