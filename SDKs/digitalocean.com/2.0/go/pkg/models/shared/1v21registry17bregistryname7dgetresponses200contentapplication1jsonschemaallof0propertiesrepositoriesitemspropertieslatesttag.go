package shared

import (
"time")

type Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag struct {
    CompressedSizeBytes *int64 `json:"compressed_size_bytes,omitempty"`
    ManifestDigest *string `json:"manifest_digest,omitempty"`
    RegistryName *string `json:"registry_name,omitempty"`
    RepositoryName *string `json:"repository_name,omitempty"`
    SizeBytes *int64 `json:"size_bytes,omitempty"`
    Tag *string `json:"tag,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

