package shared

import (
	"time"
)

type RelationalDatabase struct {
	Arn                           *string                                  `json:"arn"`
	BackupRetentionEnabled        *bool                                    `json:"backupRetentionEnabled"`
	CaCertificateIdentifier       *string                                  `json:"caCertificateIdentifier"`
	CreatedAt                     *time.Time                               `json:"createdAt"`
	Engine                        *string                                  `json:"engine"`
	EngineVersion                 *string                                  `json:"engineVersion"`
	Hardware                      *RelationalDatabaseHardware              `json:"hardware"`
	LatestRestorableTime          *time.Time                               `json:"latestRestorableTime"`
	Location                      *ResourceLocation                        `json:"location"`
	MasterDatabaseName            *string                                  `json:"masterDatabaseName"`
	MasterEndpoint                *RelationalDatabaseEndpoint              `json:"masterEndpoint"`
	MasterUsername                *string                                  `json:"masterUsername"`
	Name                          *string                                  `json:"name"`
	ParameterApplyStatus          *string                                  `json:"parameterApplyStatus"`
	PendingMaintenanceActions     []PendingMaintenanceAction               `json:"pendingMaintenanceActions"`
	PendingModifiedValues         *PendingModifiedRelationalDatabaseValues `json:"pendingModifiedValues"`
	PreferredBackupWindow         *string                                  `json:"preferredBackupWindow"`
	PreferredMaintenanceWindow    *string                                  `json:"preferredMaintenanceWindow"`
	PubliclyAccessible            *bool                                    `json:"publiclyAccessible"`
	RelationalDatabaseBlueprintID *string                                  `json:"relationalDatabaseBlueprintId"`
	RelationalDatabaseBundleID    *string                                  `json:"relationalDatabaseBundleId"`
	ResourceType                  *ResourceTypeEnum                        `json:"resourceType"`
	SecondaryAvailabilityZone     *string                                  `json:"secondaryAvailabilityZone"`
	State                         *string                                  `json:"state"`
	SupportCode                   *string                                  `json:"supportCode"`
	Tags                          []Tag                                    `json:"tags"`
}
