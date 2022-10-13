package shared

type Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize struct {
	Available    bool     `json:"available"`
	Description  string   `json:"description"`
	Disk         int64    `json:"disk"`
	Memory       int64    `json:"memory"`
	PriceHourly  float32  `json:"price_hourly"`
	PriceMonthly float32  `json:"price_monthly"`
	Regions      []string `json:"regions"`
	Slug         string   `json:"slug"`
	Transfer     float32  `json:"transfer"`
	Vcpus        int64    `json:"vcpus"`
}
