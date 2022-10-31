package operations

import (
"openapi/pkg/models/shared")


type CreateAlertPolicyRequestBodyCompareEnum string

const (
    CreateAlertPolicyRequestBodyCompareEnumGreaterThan CreateAlertPolicyRequestBodyCompareEnum = "GreaterThan"
CreateAlertPolicyRequestBodyCompareEnumLessThan CreateAlertPolicyRequestBodyCompareEnum = "LessThan"
)



type CreateAlertPolicyRequestBodyTypeEnum string

const (
    CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletLoad1 CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/load_1"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletLoad5 CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/load_5"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletLoad15 CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/load_15"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletMemoryUtilizationPercent CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/memory_utilization_percent"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletDiskUtilizationPercent CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/disk_utilization_percent"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletCPU CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/cpu"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletDiskRead CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/disk_read"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletDiskWrite CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/disk_write"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletPublicOutboundBandwidth CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/public_outbound_bandwidth"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletPublicInboundBandwidth CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/public_inbound_bandwidth"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletPrivateOutboundBandwidth CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/private_outbound_bandwidth"
CreateAlertPolicyRequestBodyTypeEnumV1InsightsDropletPrivateInboundBandwidth CreateAlertPolicyRequestBodyTypeEnum = "v1/insights/droplet/private_inbound_bandwidth"
)



type CreateAlertPolicyRequestBodyWindowEnum string

const (
    CreateAlertPolicyRequestBodyWindowEnumFivem CreateAlertPolicyRequestBodyWindowEnum = "5m"
CreateAlertPolicyRequestBodyWindowEnumTenm CreateAlertPolicyRequestBodyWindowEnum = "10m"
CreateAlertPolicyRequestBodyWindowEnumThirtym CreateAlertPolicyRequestBodyWindowEnum = "30m"
CreateAlertPolicyRequestBodyWindowEnumOneh CreateAlertPolicyRequestBodyWindowEnum = "1h"
)


type CreateAlertPolicyRequestBody struct {
    Alerts shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts `json:"alerts"`
    Compare CreateAlertPolicyRequestBodyCompareEnum `json:"compare"`
    Description string `json:"description"`
    Enabled bool `json:"enabled"`
    Entities []string `json:"entities"`
    Tags []string `json:"tags"`
    Type CreateAlertPolicyRequestBodyTypeEnum `json:"type"`
    Value float32 `json:"value"`
    Window CreateAlertPolicyRequestBodyWindowEnum `json:"window"`
    
}

type CreateAlertPolicyRequest struct {
    Request CreateAlertPolicyRequestBody `request:"mediaType=application/json"`
    
}

type CreateAlertPolicy401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateAlertPolicyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateAlertPolicy401ApplicationJSONObject *CreateAlertPolicy401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems *shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems 
    
}

