package shared

import (
	"time"
)

// RelationalDatabaseSnapshot
// Describes a database snapshot.
type RelationalDatabaseSnapshot struct {
	Arn                               *string           `json:"arn,omitempty"`
	CreatedAt                         *time.Time        `json:"createdAt,omitempty"`
	Engine                            *string           `json:"engine,omitempty"`
	EngineVersion                     *string           `json:"engineVersion,omitempty"`
	FromRelationalDatabaseArn         *string           `json:"fromRelationalDatabaseArn,omitempty"`
	FromRelationalDatabaseBlueprintID *string           `json:"fromRelationalDatabaseBlueprintId,omitempty"`
	FromRelationalDatabaseBundleID    *string           `json:"fromRelationalDatabaseBundleId,omitempty"`
	FromRelationalDatabaseName        *string           `json:"fromRelationalDatabaseName,omitempty"`
	Location                          *ResourceLocation `json:"location,omitempty"`
	Name                              *string           `json:"name,omitempty"`
	ResourceType                      *ResourceTypeEnum `json:"resourceType,omitempty"`
	SizeInGb                          *int64            `json:"sizeInGb,omitempty"`
	State                             *string           `json:"state,omitempty"`
	SupportCode                       *string           `json:"supportCode,omitempty"`
	Tags                              []Tag             `json:"tags,omitempty"`
}
