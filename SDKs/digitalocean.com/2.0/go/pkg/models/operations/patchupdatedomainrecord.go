package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUpdateDomainRecordPathParams struct {
	DomainName     string `pathParam:"style=simple,explode=false,name=domain_name"`
	DomainRecordID int64  `pathParam:"style=simple,explode=false,name=domain_record_id"`
}

type PatchUpdateDomainRecordRequest struct {
	PathParams PatchUpdateDomainRecordPathParams
	Request    *shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItems `request:"mediaType=application/json"`
}

type PatchUpdateDomainRecord401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type PatchUpdateDomainRecordResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PatchUpdateDomainRecord200ApplicationJSONAny              *interface{}
	PatchUpdateDomainRecord401ApplicationJSONObject           *PatchUpdateDomainRecord401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
