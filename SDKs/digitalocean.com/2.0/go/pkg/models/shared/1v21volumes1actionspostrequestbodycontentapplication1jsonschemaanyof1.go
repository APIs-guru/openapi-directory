package shared

type Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum string

const (
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnumAttach Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum = "attach"
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnumDetach Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum = "detach"
	Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnumResize Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum = "resize"
)

type Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 struct {
	DropletID int64                                                                                                                             `json:"droplet_id"`
	Region    *Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Type      Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum                                                   `json:"type"`
}
