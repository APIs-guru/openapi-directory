package operations

import (
	"openapi/pkg/models/shared"
)

type ListAlertPoliciesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListAlertPoliciesRequest struct {
	QueryParams ListAlertPoliciesQueryParams
}

type ListAlertPolicies200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListAlertPolicies200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListAlertPolicies200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListAlertPolicies200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack struct {
	Channel string `json:"channel"`
	URL     string `json:"url"`
}

type ListAlertPolicies200ApplicationJSONPoliciesAlerts struct {
	Email []string                                                 `json:"email"`
	Slack []ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack `json:"slack"`
}

type ListAlertPolicies200ApplicationJSONPoliciesCompareEnum string

const (
	ListAlertPolicies200ApplicationJSONPoliciesCompareEnumGreaterThan ListAlertPolicies200ApplicationJSONPoliciesCompareEnum = "GreaterThan"
	ListAlertPolicies200ApplicationJSONPoliciesCompareEnumLessThan    ListAlertPolicies200ApplicationJSONPoliciesCompareEnum = "LessThan"
)

type ListAlertPolicies200ApplicationJSONPoliciesTypeEnum string

const (
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletLoad1                    ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/load_1"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletLoad5                    ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/load_5"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletLoad15                   ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/load_15"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletMemoryUtilizationPercent ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/memory_utilization_percent"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletDiskUtilizationPercent   ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/disk_utilization_percent"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletCPU                      ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/cpu"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletDiskRead                 ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/disk_read"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletDiskWrite                ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/disk_write"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletPublicOutboundBandwidth  ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/public_outbound_bandwidth"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletPublicInboundBandwidth   ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/public_inbound_bandwidth"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletPrivateOutboundBandwidth ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/private_outbound_bandwidth"
	ListAlertPolicies200ApplicationJSONPoliciesTypeEnumV1InsightsDropletPrivateInboundBandwidth  ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = "v1/insights/droplet/private_inbound_bandwidth"
)

type ListAlertPolicies200ApplicationJSONPoliciesWindowEnum string

const (
	ListAlertPolicies200ApplicationJSONPoliciesWindowEnumFivem   ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = "5m"
	ListAlertPolicies200ApplicationJSONPoliciesWindowEnumTenm    ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = "10m"
	ListAlertPolicies200ApplicationJSONPoliciesWindowEnumThirtym ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = "30m"
	ListAlertPolicies200ApplicationJSONPoliciesWindowEnumOneh    ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = "1h"
)

type ListAlertPolicies200ApplicationJSONPolicies struct {
	Alerts      ListAlertPolicies200ApplicationJSONPoliciesAlerts      `json:"alerts"`
	Compare     ListAlertPolicies200ApplicationJSONPoliciesCompareEnum `json:"compare"`
	Description string                                                 `json:"description"`
	Enabled     bool                                                   `json:"enabled"`
	Entities    []string                                               `json:"entities"`
	Tags        []string                                               `json:"tags"`
	Type        ListAlertPolicies200ApplicationJSONPoliciesTypeEnum    `json:"type"`
	UUID        string                                                 `json:"uuid"`
	Value       float32                                                `json:"value"`
	Window      ListAlertPolicies200ApplicationJSONPoliciesWindowEnum  `json:"window"`
}

type ListAlertPolicies200ApplicationJSON struct {
	Links    *ListAlertPolicies200ApplicationJSONLinks     `json:"links"`
	Meta     ListAlertPolicies200ApplicationJSONMeta       `json:"meta"`
	Policies []ListAlertPolicies200ApplicationJSONPolicies `json:"policies"`
}

type ListAlertPolicies401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAlertPoliciesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAlertPolicies200ApplicationJSONObject                 *ListAlertPolicies200ApplicationJSON
	ListAlertPolicies401ApplicationJSONObject                 *ListAlertPolicies401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
