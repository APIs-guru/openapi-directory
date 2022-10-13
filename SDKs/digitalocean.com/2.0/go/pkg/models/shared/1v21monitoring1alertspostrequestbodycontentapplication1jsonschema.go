package shared

type Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum string

const (
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnumGreaterThan Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum = "GreaterThan"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnumLessThan    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum = "LessThan"
)

type Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum string

const (
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletLoad1                    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/load_1"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletLoad5                    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/load_5"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletLoad15                   Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/load_15"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletMemoryUtilizationPercent Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/memory_utilization_percent"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletDiskUtilizationPercent   Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/disk_utilization_percent"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletCPU                      Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/cpu"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletDiskRead                 Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/disk_read"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletDiskWrite                Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/disk_write"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletPublicOutboundBandwidth  Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/public_outbound_bandwidth"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletPublicInboundBandwidth   Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/public_inbound_bandwidth"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletPrivateOutboundBandwidth Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/private_outbound_bandwidth"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnumV1InsightsDropletPrivateInboundBandwidth  Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = "v1/insights/droplet/private_inbound_bandwidth"
)

type Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum string

const (
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnumFivem   Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = "5m"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnumTenm    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = "10m"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnumThirtym Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = "30m"
	Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnumOneh    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = "1h"
)

type Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema struct {
	Alerts      Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts `json:"alerts"`
	Compare     Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum                                   `json:"compare"`
	Description string                                                                                                           `json:"description"`
	Enabled     bool                                                                                                             `json:"enabled"`
	Entities    []string                                                                                                         `json:"entities"`
	Tags        []string                                                                                                         `json:"tags"`
	Type        Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum                                      `json:"type"`
	Value       float32                                                                                                          `json:"value"`
	Window      Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum                                    `json:"window"`
}
