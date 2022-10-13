package shared

import (
	"time"
)

type ApplicationDetail struct {
	ApplicationArn                                 string                                          `json:"ApplicationARN"`
	ApplicationConfigurationDescription            *ApplicationConfigurationDescription            `json:"ApplicationConfigurationDescription"`
	ApplicationDescription                         *string                                         `json:"ApplicationDescription"`
	ApplicationMaintenanceConfigurationDescription *ApplicationMaintenanceConfigurationDescription `json:"ApplicationMaintenanceConfigurationDescription"`
	ApplicationMode                                *ApplicationModeEnum                            `json:"ApplicationMode"`
	ApplicationName                                string                                          `json:"ApplicationName"`
	ApplicationStatus                              ApplicationStatusEnum                           `json:"ApplicationStatus"`
	ApplicationVersionID                           int64                                           `json:"ApplicationVersionId"`
	ApplicationVersionRolledBackFrom               *int64                                          `json:"ApplicationVersionRolledBackFrom"`
	ApplicationVersionRolledBackTo                 *int64                                          `json:"ApplicationVersionRolledBackTo"`
	ApplicationVersionUpdatedFrom                  *int64                                          `json:"ApplicationVersionUpdatedFrom"`
	CloudWatchLoggingOptionDescriptions            []CloudWatchLoggingOptionDescription            `json:"CloudWatchLoggingOptionDescriptions"`
	ConditionalToken                               *string                                         `json:"ConditionalToken"`
	CreateTimestamp                                *time.Time                                      `json:"CreateTimestamp"`
	LastUpdateTimestamp                            *time.Time                                      `json:"LastUpdateTimestamp"`
	RuntimeEnvironment                             RuntimeEnvironmentEnum                          `json:"RuntimeEnvironment"`
	ServiceExecutionRole                           *string                                         `json:"ServiceExecutionRole"`
}
