package shared

import (
	"time"
)

// ApplicationDetail
// <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
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
