package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainRecordPathParams struct {
	DomainName     string `pathParam:"style=simple,explode=false,name=domain_name"`
	DomainRecordID int64  `pathParam:"style=simple,explode=false,name=domain_record_id"`
}

type UpdateDomainRecordRequest struct {
	PathParams UpdateDomainRecordPathParams
	Request    *shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItems `request:"mediaType=application/json"`
}

type UpdateDomainRecord401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateDomainRecordResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateDomainRecord200ApplicationJSONAny                   *interface{}
	UpdateDomainRecord401ApplicationJSONObject                *UpdateDomainRecord401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
