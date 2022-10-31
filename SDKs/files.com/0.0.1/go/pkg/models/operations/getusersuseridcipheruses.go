package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDCipherUsesPathParams struct {
	UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDCipherUsesQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetUsersUserIDCipherUsesRequest struct {
	PathParams  GetUsersUserIDCipherUsesPathParams
	QueryParams GetUsersUserIDCipherUsesQueryParams
}

type GetUsersUserIDCipherUsesResponse struct {
	ContentType           string
	StatusCode            int64
	UserCipherUseEntities []shared.UserCipherUseEntity
}
