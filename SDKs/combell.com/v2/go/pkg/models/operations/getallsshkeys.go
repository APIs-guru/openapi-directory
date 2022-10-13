package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllSSHKeysQueryParams struct {
	Skip *int32 `queryParam:"style=form,explode=true,name=skip"`
	Take *int32 `queryParam:"style=form,explode=true,name=take"`
}

type GetAllSSHKeysRequest struct {
	QueryParams GetAllSSHKeysQueryParams
}

type GetAllSSHKeysResponse struct {
	ContentType   string
	Headers       map[string][]string
	SSHKeyDetails []shared.SSHKeyDetail
	StatusCode    int64
}
