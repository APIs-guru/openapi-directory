package shared

type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources struct {
	Count           *int64                                                                                                    `json:"count"`
	Databases       *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases"`
	Droplets        *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets"`
	Imgages         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages"`
	LastTaggedURI   *string                                                                                                   `json:"last_tagged_uri"`
	VolumeSnapshots *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots"`
	Volumes         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes"`
}

type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems struct {
	Name      *string                                                                                   `json:"name"`
	Resources *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources `json:"resources"`
}
