package operations

import (
	"openapi/pkg/models/shared"
)

type GetDirectDebitByUUIDPathParams struct {
	DirectDebitUUID string `pathParam:"style=simple,explode=false,name=directDebitUuid"`
}

type GetDirectDebitByUUIDRequest struct {
	PathParams GetDirectDebitByUUIDPathParams
}

type GetDirectDebitByUUIDResponse struct {
	ContentType                                                                            string
	StatusCode                                                                             int64
	OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems *shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems
}
