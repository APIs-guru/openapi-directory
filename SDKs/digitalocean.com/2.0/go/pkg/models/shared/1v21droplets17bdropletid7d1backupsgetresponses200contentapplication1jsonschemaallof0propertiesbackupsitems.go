package shared

import (
	"time"
)

type Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum string

const (
	Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnumSnapshot Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum = "snapshot"
	Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnumBackup   Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum = "backup"
)

type Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems struct {
	CreatedAt     time.Time                                                                                                                          `json:"created_at"`
	ID            int64                                                                                                                              `json:"id"`
	MinDiskSize   int64                                                                                                                              `json:"min_disk_size"`
	Name          string                                                                                                                             `json:"name"`
	Regions       []string                                                                                                                           `json:"regions"`
	SizeGigabytes float32                                                                                                                            `json:"size_gigabytes"`
	Type          Onev21droplets1Percent7BdropletIDPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItemsTypeEnum `json:"type"`
}
