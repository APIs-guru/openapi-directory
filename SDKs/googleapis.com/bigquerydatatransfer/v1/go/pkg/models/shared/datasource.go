package shared

type DataSourceAuthorizationTypeEnum string

const (
	DataSourceAuthorizationTypeEnumAuthorizationTypeUnspecified DataSourceAuthorizationTypeEnum = "AUTHORIZATION_TYPE_UNSPECIFIED"
	DataSourceAuthorizationTypeEnumAuthorizationCode            DataSourceAuthorizationTypeEnum = "AUTHORIZATION_CODE"
	DataSourceAuthorizationTypeEnumGooglePlusAuthorizationCode  DataSourceAuthorizationTypeEnum = "GOOGLE_PLUS_AUTHORIZATION_CODE"
	DataSourceAuthorizationTypeEnumFirstPartyOauth              DataSourceAuthorizationTypeEnum = "FIRST_PARTY_OAUTH"
)

type DataSourceDataRefreshTypeEnum string

const (
	DataSourceDataRefreshTypeEnumDataRefreshTypeUnspecified DataSourceDataRefreshTypeEnum = "DATA_REFRESH_TYPE_UNSPECIFIED"
	DataSourceDataRefreshTypeEnumSlidingWindow              DataSourceDataRefreshTypeEnum = "SLIDING_WINDOW"
	DataSourceDataRefreshTypeEnumCustomSlidingWindow        DataSourceDataRefreshTypeEnum = "CUSTOM_SLIDING_WINDOW"
)

type DataSourceTransferTypeEnum string

const (
	DataSourceTransferTypeEnumTransferTypeUnspecified DataSourceTransferTypeEnum = "TRANSFER_TYPE_UNSPECIFIED"
	DataSourceTransferTypeEnumBatch                   DataSourceTransferTypeEnum = "BATCH"
	DataSourceTransferTypeEnumStreaming               DataSourceTransferTypeEnum = "STREAMING"
)

type DataSource struct {
	AuthorizationType            *DataSourceAuthorizationTypeEnum `json:"authorizationType"`
	ClientID                     *string                          `json:"clientId"`
	DataRefreshType              *DataSourceDataRefreshTypeEnum   `json:"dataRefreshType"`
	DataSourceID                 *string                          `json:"dataSourceId"`
	DefaultDataRefreshWindowDays *int32                           `json:"defaultDataRefreshWindowDays"`
	DefaultSchedule              *string                          `json:"defaultSchedule"`
	Description                  *string                          `json:"description"`
	DisplayName                  *string                          `json:"displayName"`
	HelpURL                      *string                          `json:"helpUrl"`
	ManualRunsDisabled           *bool                            `json:"manualRunsDisabled"`
	MinimumScheduleInterval      *string                          `json:"minimumScheduleInterval"`
	Name                         *string                          `json:"name"`
	Parameters                   []DataSourceParameter            `json:"parameters"`
	Scopes                       []string                         `json:"scopes"`
	SupportsCustomSchedule       *bool                            `json:"supportsCustomSchedule"`
	SupportsMultipleTransfers    *bool                            `json:"supportsMultipleTransfers"`
	TransferType                 *DataSourceTransferTypeEnum      `json:"transferType"`
	UpdateDeadlineSeconds        *int32                           `json:"updateDeadlineSeconds"`
}
