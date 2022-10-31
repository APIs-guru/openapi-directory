package shared

import (
	"time"
)

type ApplicationDetail struct {
	ApplicationArn                      string                               `json:"ApplicationARN"`
	ApplicationCode                     *string                              `json:"ApplicationCode,omitempty"`
	ApplicationDescription              *string                              `json:"ApplicationDescription,omitempty"`
	ApplicationName                     string                               `json:"ApplicationName"`
	ApplicationStatus                   ApplicationStatusEnum                `json:"ApplicationStatus"`
	ApplicationVersionID                int64                                `json:"ApplicationVersionId"`
	CloudWatchLoggingOptionDescriptions []CloudWatchLoggingOptionDescription `json:"CloudWatchLoggingOptionDescriptions,omitempty"`
	CreateTimestamp                     *time.Time                           `json:"CreateTimestamp,omitempty"`
	InputDescriptions                   []InputDescription                   `json:"InputDescriptions,omitempty"`
	LastUpdateTimestamp                 *time.Time                           `json:"LastUpdateTimestamp,omitempty"`
	OutputDescriptions                  []OutputDescription                  `json:"OutputDescriptions,omitempty"`
	ReferenceDataSourceDescriptions     []ReferenceDataSourceDescription     `json:"ReferenceDataSourceDescriptions,omitempty"`
}
