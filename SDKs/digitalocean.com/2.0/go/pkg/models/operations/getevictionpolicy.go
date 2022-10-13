package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvictionPolicyPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type GetEvictionPolicyRequest struct {
	PathParams GetEvictionPolicyPathParams
}

type GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum string

const (
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumNoeviction     GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "noeviction"
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumAllkeysLru     GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "allkeys_lru"
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumAllkeysRandom  GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "allkeys_random"
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumVolatileLru    GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "volatile_lru"
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumVolatileRandom GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "volatile_random"
	GetEvictionPolicy200ApplicationJSONEvictionPolicyEnumVolatileTTL    GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = "volatile_ttl"
)

type GetEvictionPolicy200ApplicationJSON struct {
	EvictionPolicy GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum `json:"eviction_policy"`
}

type GetEvictionPolicy401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetEvictionPolicyResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetEvictionPolicy200ApplicationJSONObject                 *GetEvictionPolicy200ApplicationJSON
	GetEvictionPolicy401ApplicationJSONObject                 *GetEvictionPolicy401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
