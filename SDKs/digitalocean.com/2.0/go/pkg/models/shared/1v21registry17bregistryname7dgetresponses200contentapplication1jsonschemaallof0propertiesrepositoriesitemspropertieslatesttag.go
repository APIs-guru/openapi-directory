package shared

import (
	"time"
)

type Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag struct {
	CompressedSizeBytes *int64     `json:"compressed_size_bytes"`
	ManifestDigest      *string    `json:"manifest_digest"`
	RegistryName        *string    `json:"registry_name"`
	RepositoryName      *string    `json:"repository_name"`
	SizeBytes           *int64     `json:"size_bytes"`
	Tag                 *string    `json:"tag"`
	UpdatedAt           *time.Time `json:"updated_at"`
}
