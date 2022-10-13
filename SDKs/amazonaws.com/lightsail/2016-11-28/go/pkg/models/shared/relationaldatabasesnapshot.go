package shared

import (
	"time"
)

type RelationalDatabaseSnapshot struct {
	Arn                               *string           `json:"arn"`
	CreatedAt                         *time.Time        `json:"createdAt"`
	Engine                            *string           `json:"engine"`
	EngineVersion                     *string           `json:"engineVersion"`
	FromRelationalDatabaseArn         *string           `json:"fromRelationalDatabaseArn"`
	FromRelationalDatabaseBlueprintID *string           `json:"fromRelationalDatabaseBlueprintId"`
	FromRelationalDatabaseBundleID    *string           `json:"fromRelationalDatabaseBundleId"`
	FromRelationalDatabaseName        *string           `json:"fromRelationalDatabaseName"`
	Location                          *ResourceLocation `json:"location"`
	Name                              *string           `json:"name"`
	ResourceType                      *ResourceTypeEnum `json:"resourceType"`
	SizeInGb                          *int64            `json:"sizeInGb"`
	State                             *string           `json:"state"`
	SupportCode                       *string           `json:"supportCode"`
	Tags                              []Tag             `json:"tags"`
}
