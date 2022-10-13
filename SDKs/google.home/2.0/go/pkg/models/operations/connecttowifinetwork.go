package operations

import (
	"openapi/pkg/models/shared"
)

type ConnecttoWiFiNetworkRequest struct {
	Request shared.ConnecttoWiFiNetworkRequest `request:"mediaType=application/json"`
}

type ConnecttoWiFiNetworkResponse struct {
	ContentType string
	StatusCode  int64
}
