package operations

import (
	"openapi/pkg/models/shared"
)

type RetargetingCountResponse struct {
	APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
