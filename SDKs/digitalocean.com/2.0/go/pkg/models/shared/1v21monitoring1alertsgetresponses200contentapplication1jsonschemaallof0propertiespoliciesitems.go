package shared

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack struct {
	Channel string `json:"channel"`
	URL     string `json:"url"`
}

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts struct {
	Email []string                                                                                                      `json:"email"`
	Slack []Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack `json:"slack"`
}

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum string

const (
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnumGreaterThan Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum = "GreaterThan"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnumLessThan    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum = "LessThan"
)

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum string

const (
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletLoad1                    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/load_1"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletLoad5                    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/load_5"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletLoad15                   Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/load_15"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletMemoryUtilizationPercent Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/memory_utilization_percent"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletDiskUtilizationPercent   Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/disk_utilization_percent"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletCPU                      Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/cpu"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletDiskRead                 Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/disk_read"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletDiskWrite                Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/disk_write"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletPublicOutboundBandwidth  Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/public_outbound_bandwidth"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletPublicInboundBandwidth   Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/public_inbound_bandwidth"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletPrivateOutboundBandwidth Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/private_outbound_bandwidth"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnumV1InsightsDropletPrivateInboundBandwidth  Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = "v1/insights/droplet/private_inbound_bandwidth"
)

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum string

const (
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnumFivem   Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum = "5m"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnumTenm    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum = "10m"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnumThirtym Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum = "30m"
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnumOneh    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum = "1h"
)

type Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems struct {
	Alerts      Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts      `json:"alerts"`
	Compare     Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum `json:"compare"`
	Description string                                                                                                      `json:"description"`
	Enabled     bool                                                                                                        `json:"enabled"`
	Entities    []string                                                                                                    `json:"entities"`
	Tags        []string                                                                                                    `json:"tags"`
	Type        Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum    `json:"type"`
	UUID        string                                                                                                      `json:"uuid"`
	Value       float32                                                                                                     `json:"value"`
	Window      Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum  `json:"window"`
}
