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

// DataSource
// Defines the properties and custom parameters for a data source.
type DataSource struct {
	AuthorizationType            *DataSourceAuthorizationTypeEnum `json:"authorizationType,omitempty"`
	ClientID                     *string                          `json:"clientId,omitempty"`
	DataRefreshType              *DataSourceDataRefreshTypeEnum   `json:"dataRefreshType,omitempty"`
	DataSourceID                 *string                          `json:"dataSourceId,omitempty"`
	DefaultDataRefreshWindowDays *int32                           `json:"defaultDataRefreshWindowDays,omitempty"`
	DefaultSchedule              *string                          `json:"defaultSchedule,omitempty"`
	Description                  *string                          `json:"description,omitempty"`
	DisplayName                  *string                          `json:"displayName,omitempty"`
	HelpURL                      *string                          `json:"helpUrl,omitempty"`
	ManualRunsDisabled           *bool                            `json:"manualRunsDisabled,omitempty"`
	MinimumScheduleInterval      *string                          `json:"minimumScheduleInterval,omitempty"`
	Name                         *string                          `json:"name,omitempty"`
	Parameters                   []DataSourceParameter            `json:"parameters,omitempty"`
	Scopes                       []string                         `json:"scopes,omitempty"`
	SupportsCustomSchedule       *bool                            `json:"supportsCustomSchedule,omitempty"`
	SupportsMultipleTransfers    *bool                            `json:"supportsMultipleTransfers,omitempty"`
	TransferType                 *DataSourceTransferTypeEnum      `json:"transferType,omitempty"`
	UpdateDeadlineSeconds        *int32                           `json:"updateDeadlineSeconds,omitempty"`
}
