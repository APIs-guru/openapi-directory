package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Cursor                *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter                map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt              map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq            map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike            map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt              map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq            map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	Ids                   *string                `queryParam:"style=form,explode=true,name=ids"`
	PerPage               *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	QAdmin                *string                `queryParam:"style=form,explode=true,name=q[admin]"`
	QAllowedIps           *string                `queryParam:"style=form,explode=true,name=q[allowed_ips]"`
	QEmail                *string                `queryParam:"style=form,explode=true,name=q[email]"`
	QNotes                *string                `queryParam:"style=form,explode=true,name=q[notes]"`
	QPasswordValidityDays *string                `queryParam:"style=form,explode=true,name=q[password_validity_days]"`
	QSslRequired          *string                `queryParam:"style=form,explode=true,name=q[ssl_required]"`
	QUsername             *string                `queryParam:"style=form,explode=true,name=q[username]"`
	Search                *string                `queryParam:"style=form,explode=true,name=search"`
	SortBy                map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	ContentType  string
	StatusCode   int64
	UserEntities []shared.UserEntity
}
