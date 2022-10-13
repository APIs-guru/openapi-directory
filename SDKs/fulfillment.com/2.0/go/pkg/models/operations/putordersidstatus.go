package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrdersIDStatusPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutOrdersIDStatusRequestBodyStatus struct {
	Code string `json:"code"`
}

type PutOrdersIDStatusRequestBodyStatusTypeSimpleV2 struct {
	Reason string                             `json:"reason"`
	Status PutOrdersIDStatusRequestBodyStatus `json:"status"`
}

type PutOrdersIDStatusSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type PutOrdersIDStatusRequest struct {
	PathParams PutOrdersIDStatusPathParams
	Request    PutOrdersIDStatusRequestBodyStatusTypeSimpleV2 `request:"mediaType=application/json"`
	Security   PutOrdersIDStatusSecurity
}

type PutOrdersIDStatusResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	OneordersPostResponses201ContentApplication1jsonSchema *shared.OneordersPostResponses201ContentApplication1jsonSchema
}
