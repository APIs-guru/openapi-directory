package operations

import (
	"openapi/pkg/models/shared"
)

type RequestAlgorithmsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestAlgorithmsRequest struct {
	Headers RequestAlgorithmsHeaders
}

type RequestAlgorithmsResponse struct {
	AlgorithmVersionInfoList *shared.AlgorithmVersionInfoList
	ContentType              string
	ErrorResponse            *shared.ErrorResponse
	StatusCode               int64
}
