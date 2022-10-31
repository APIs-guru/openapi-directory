package operations

import (
	"openapi/pkg/models/shared"
)

type GetRemoteServersQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetRemoteServersRequest struct {
	QueryParams GetRemoteServersQueryParams
}

type GetRemoteServersResponse struct {
	ContentType          string
	RemoteServerEntities []shared.RemoteServerEntity
	StatusCode           int64
}
