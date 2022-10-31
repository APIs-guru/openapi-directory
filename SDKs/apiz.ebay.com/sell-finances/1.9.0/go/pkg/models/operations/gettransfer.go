package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransferPathParams struct {
	TransferID string `pathParam:"style=simple,explode=false,name=transfer_Id"`
}

type GetTransferSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetTransferRequest struct {
	PathParams GetTransferPathParams
	Security   GetTransferSecurity
}

type GetTransferResponse struct {
	ContentType string
	StatusCode  int64
	Transfer    *shared.Transfer
}
