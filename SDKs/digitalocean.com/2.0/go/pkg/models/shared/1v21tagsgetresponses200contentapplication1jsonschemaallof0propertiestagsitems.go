package shared

type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources struct {
	Count           *int64                                                                                                    `json:"count,omitempty"`
	Databases       *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases,omitempty"`
	Droplets        *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets,omitempty"`
	Imgages         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages,omitempty"`
	LastTaggedURI   *string                                                                                                   `json:"last_tagged_uri,omitempty"`
	VolumeSnapshots *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots,omitempty"`
	Volumes         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes,omitempty"`
}

type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems struct {
	Name      *string                                                                                   `json:"name,omitempty"`
	Resources *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources `json:"resources,omitempty"`
}
