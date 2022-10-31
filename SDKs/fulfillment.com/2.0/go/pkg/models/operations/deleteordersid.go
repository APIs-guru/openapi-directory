package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOrdersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteOrdersIDSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type DeleteOrdersIDRequest struct {
	PathParams DeleteOrdersIDPathParams
	Security   DeleteOrdersIDSecurity
}

type DeleteOrdersIDResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	OneordersGetResponses404ContentApplication1jsonSchema  *shared.OneordersGetResponses404ContentApplication1jsonSchema
	OneordersPostResponses201ContentApplication1jsonSchema *shared.OneordersPostResponses201ContentApplication1jsonSchema
}
