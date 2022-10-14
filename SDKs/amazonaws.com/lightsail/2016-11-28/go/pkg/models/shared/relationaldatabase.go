package shared

import (
	"time"
)

type RelationalDatabase struct {
	Arn                           *string                                  `json:"arn,omitempty"`
	BackupRetentionEnabled        *bool                                    `json:"backupRetentionEnabled,omitempty"`
	CaCertificateIdentifier       *string                                  `json:"caCertificateIdentifier,omitempty"`
	CreatedAt                     *time.Time                               `json:"createdAt,omitempty"`
	Engine                        *string                                  `json:"engine,omitempty"`
	EngineVersion                 *string                                  `json:"engineVersion,omitempty"`
	Hardware                      *RelationalDatabaseHardware              `json:"hardware,omitempty"`
	LatestRestorableTime          *time.Time                               `json:"latestRestorableTime,omitempty"`
	Location                      *ResourceLocation                        `json:"location,omitempty"`
	MasterDatabaseName            *string                                  `json:"masterDatabaseName,omitempty"`
	MasterEndpoint                *RelationalDatabaseEndpoint              `json:"masterEndpoint,omitempty"`
	MasterUsername                *string                                  `json:"masterUsername,omitempty"`
	Name                          *string                                  `json:"name,omitempty"`
	ParameterApplyStatus          *string                                  `json:"parameterApplyStatus,omitempty"`
	PendingMaintenanceActions     []PendingMaintenanceAction               `json:"pendingMaintenanceActions,omitempty"`
	PendingModifiedValues         *PendingModifiedRelationalDatabaseValues `json:"pendingModifiedValues,omitempty"`
	PreferredBackupWindow         *string                                  `json:"preferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow    *string                                  `json:"preferredMaintenanceWindow,omitempty"`
	PubliclyAccessible            *bool                                    `json:"publiclyAccessible,omitempty"`
	RelationalDatabaseBlueprintID *string                                  `json:"relationalDatabaseBlueprintId,omitempty"`
	RelationalDatabaseBundleID    *string                                  `json:"relationalDatabaseBundleId,omitempty"`
	ResourceType                  *ResourceTypeEnum                        `json:"resourceType,omitempty"`
	SecondaryAvailabilityZone     *string                                  `json:"secondaryAvailabilityZone,omitempty"`
	State                         *string                                  `json:"state,omitempty"`
	SupportCode                   *string                                  `json:"supportCode,omitempty"`
	Tags                          []Tag                                    `json:"tags,omitempty"`
}
