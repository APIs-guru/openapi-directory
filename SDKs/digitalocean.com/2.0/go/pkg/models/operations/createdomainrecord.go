package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainRecordPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type CreateDomainRecordRequestBody1 struct {
	Data     string  `json:"data"`
	Flags    *int64  `json:"flags"`
	ID       *int64  `json:"id"`
	Name     string  `json:"name"`
	Port     *int64  `json:"port"`
	Priority *int64  `json:"priority"`
	Tag      *string `json:"tag"`
	TTL      *int64  `json:"ttl"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight"`
}

type CreateDomainRecordRequestBody2 struct {
	Data     string  `json:"data"`
	Flags    *int64  `json:"flags"`
	ID       *int64  `json:"id"`
	Name     string  `json:"name"`
	Port     *int64  `json:"port"`
	Priority *int64  `json:"priority"`
	Tag      *string `json:"tag"`
	TTL      *int64  `json:"ttl"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight"`
}

type CreateDomainRecordRequestBody3 struct {
	Data     string `json:"data"`
	Flags    int64  `json:"flags"`
	ID       *int64 `json:"id"`
	Name     string `json:"name"`
	Port     *int64 `json:"port"`
	Priority *int64 `json:"priority"`
	Tag      string `json:"tag"`
	TTL      *int64 `json:"ttl"`
	Type     string `json:"type"`
	Weight   *int64 `json:"weight"`
}

type CreateDomainRecordRequestBody4 struct {
	Data     string  `json:"data"`
	Flags    *int64  `json:"flags"`
	ID       *int64  `json:"id"`
	Name     string  `json:"name"`
	Port     *int64  `json:"port"`
	Priority *int64  `json:"priority"`
	Tag      *string `json:"tag"`
	TTL      *int64  `json:"ttl"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight"`
}

type CreateDomainRecordRequestBody5 struct {
	Data     string  `json:"data"`
	Flags    *int64  `json:"flags"`
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	Port     *int64  `json:"port"`
	Priority int64   `json:"priority"`
	Tag      *string `json:"tag"`
	TTL      *int64  `json:"ttl"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight"`
}

type CreateDomainRecordRequestBody6 struct {
	Data     string `json:"data"`
	Flags    int64  `json:"flags"`
	ID       *int64 `json:"id"`
	Name     string `json:"name"`
	Port     *int64 `json:"port"`
	Priority *int64 `json:"priority"`
	Tag      string `json:"tag"`
	TTL      *int64 `json:"ttl"`
	Type     string `json:"type"`
	Weight   *int64 `json:"weight"`
}

type CreateDomainRecordRequestBody7 struct {
	Data     *string `json:"data"`
	Flags    *int64  `json:"flags"`
	ID       *int64  `json:"id"`
	Name     *string `json:"name"`
	Port     *int64  `json:"port"`
	Priority *int64  `json:"priority"`
	Tag      *string `json:"tag"`
	TTL      int64   `json:"ttl"`
	Type     string  `json:"type"`
	Weight   *int64  `json:"weight"`
}

type CreateDomainRecordRequestBody8 struct {
	Data     string `json:"data"`
	Flags    int64  `json:"flags"`
	ID       *int64 `json:"id"`
	Name     string `json:"name"`
	Port     int64  `json:"port"`
	Priority int64  `json:"priority"`
	Tag      string `json:"tag"`
	TTL      *int64 `json:"ttl"`
	Type     string `json:"type"`
	Weight   *int64 `json:"weight"`
}

type CreateDomainRecordRequestBody9 struct {
	Data     string `json:"data"`
	Flags    int64  `json:"flags"`
	ID       *int64 `json:"id"`
	Name     string `json:"name"`
	Port     *int64 `json:"port"`
	Priority *int64 `json:"priority"`
	Tag      string `json:"tag"`
	TTL      *int64 `json:"ttl"`
	Type     string `json:"type"`
	Weight   *int64 `json:"weight"`
}

type CreateDomainRecordRequest struct {
	PathParams CreateDomainRecordPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type CreateDomainRecord401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateDomainRecordResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDomainRecord201ApplicationJSONAny                   *interface{}
	CreateDomainRecord401ApplicationJSONObject                *CreateDomainRecord401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
