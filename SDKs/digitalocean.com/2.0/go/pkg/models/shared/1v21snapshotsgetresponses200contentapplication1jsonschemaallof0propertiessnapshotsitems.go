package shared

import (
"time")


type Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum string

const (
    Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnumDroplet Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum = "droplet"
Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnumVolume Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum = "volume"
)


type Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems struct {
    CreatedAt time.Time `json:"created_at"`
    ID string `json:"id"`
    MinDiskSize int64 `json:"min_disk_size"`
    Name string `json:"name"`
    Regions []string `json:"regions"`
    ResourceID string `json:"resource_id"`
    ResourceType Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItemsResourceTypeEnum `json:"resource_type"`
    SizeGigabytes float32 `json:"size_gigabytes"`
    Tags []string `json:"tags"`
    
}

