package shared

import (
	"time"
)

// ApplicationDetail
// Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
type ApplicationDetail struct {
	ApplicationArn                                 string                                          `json:"ApplicationARN"`
	ApplicationConfigurationDescription            *ApplicationConfigurationDescription            `json:"ApplicationConfigurationDescription,omitempty"`
	ApplicationDescription                         *string                                         `json:"ApplicationDescription,omitempty"`
	ApplicationMaintenanceConfigurationDescription *ApplicationMaintenanceConfigurationDescription `json:"ApplicationMaintenanceConfigurationDescription,omitempty"`
	ApplicationMode                                *ApplicationModeEnum                            `json:"ApplicationMode,omitempty"`
	ApplicationName                                string                                          `json:"ApplicationName"`
	ApplicationStatus                              ApplicationStatusEnum                           `json:"ApplicationStatus"`
	ApplicationVersionID                           int64                                           `json:"ApplicationVersionId"`
	ApplicationVersionRolledBackFrom               *int64                                          `json:"ApplicationVersionRolledBackFrom,omitempty"`
	ApplicationVersionRolledBackTo                 *int64                                          `json:"ApplicationVersionRolledBackTo,omitempty"`
	ApplicationVersionUpdatedFrom                  *int64                                          `json:"ApplicationVersionUpdatedFrom,omitempty"`
	CloudWatchLoggingOptionDescriptions            []CloudWatchLoggingOptionDescription            `json:"CloudWatchLoggingOptionDescriptions,omitempty"`
	ConditionalToken                               *string                                         `json:"ConditionalToken,omitempty"`
	CreateTimestamp                                *time.Time                                      `json:"CreateTimestamp,omitempty"`
	LastUpdateTimestamp                            *time.Time                                      `json:"LastUpdateTimestamp,omitempty"`
	RuntimeEnvironment                             RuntimeEnvironmentEnum                          `json:"RuntimeEnvironment"`
	ServiceExecutionRole                           *string                                         `json:"ServiceExecutionRole,omitempty"`
}
