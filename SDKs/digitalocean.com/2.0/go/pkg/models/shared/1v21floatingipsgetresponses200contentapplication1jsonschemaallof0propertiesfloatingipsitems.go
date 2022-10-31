package shared

type Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems struct {
	Droplet *interface{}                                                                                         `json:"droplet,omitempty"`
	IP      *string                                                                                              `json:"ip,omitempty"`
	Locked  *bool                                                                                                `json:"locked,omitempty"`
	Region  *Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion `json:"region,omitempty"`
}
