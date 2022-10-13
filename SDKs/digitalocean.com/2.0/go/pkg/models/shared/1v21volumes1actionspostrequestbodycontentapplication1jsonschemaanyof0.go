package shared

type Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum string

const (
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnumAttach Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = "attach"
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnumDetach Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = "detach"
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnumResize Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = "resize"
)

type Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 struct {
	DropletID int64                                                                                                                             `json:"droplet_id"`
	Region    *Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Tags      []string                                                                                                                          `json:"tags"`
	Type      Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum                                                   `json:"type"`
}
