package shared

import (
	"time"
)

type ApplicationDetail struct {
	ApplicationArn                      string                               `json:"ApplicationARN"`
	ApplicationCode                     *string                              `json:"ApplicationCode"`
	ApplicationDescription              *string                              `json:"ApplicationDescription"`
	ApplicationName                     string                               `json:"ApplicationName"`
	ApplicationStatus                   ApplicationStatusEnum                `json:"ApplicationStatus"`
	ApplicationVersionID                int64                                `json:"ApplicationVersionId"`
	CloudWatchLoggingOptionDescriptions []CloudWatchLoggingOptionDescription `json:"CloudWatchLoggingOptionDescriptions"`
	CreateTimestamp                     *time.Time                           `json:"CreateTimestamp"`
	InputDescriptions                   []InputDescription                   `json:"InputDescriptions"`
	LastUpdateTimestamp                 *time.Time                           `json:"LastUpdateTimestamp"`
	OutputDescriptions                  []OutputDescription                  `json:"OutputDescriptions"`
	ReferenceDataSourceDescriptions     []ReferenceDataSourceDescription     `json:"ReferenceDataSourceDescriptions"`
}
