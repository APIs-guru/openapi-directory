package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ReposListForUserDirectionEnum string

const (
	ReposListForUserDirectionEnumAsc  ReposListForUserDirectionEnum = "asc"
	ReposListForUserDirectionEnumDesc ReposListForUserDirectionEnum = "desc"
)

type ReposListForUserSortEnum string

const (
	ReposListForUserSortEnumCreated  ReposListForUserSortEnum = "created"
	ReposListForUserSortEnumUpdated  ReposListForUserSortEnum = "updated"
	ReposListForUserSortEnumPushed   ReposListForUserSortEnum = "pushed"
	ReposListForUserSortEnumFullName ReposListForUserSortEnum = "full_name"
)

type ReposListForUserTypeEnum string

const (
	ReposListForUserTypeEnumAll    ReposListForUserTypeEnum = "all"
	ReposListForUserTypeEnumOwner  ReposListForUserTypeEnum = "owner"
	ReposListForUserTypeEnumMember ReposListForUserTypeEnum = "member"
)

type ReposListForUserQueryParams struct {
	Direction *ReposListForUserDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                         `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                         `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *ReposListForUserSortEnum      `queryParam:"style=form,explode=true,name=sort"`
	Type      *ReposListForUserTypeEnum      `queryParam:"style=form,explode=true,name=type"`
}

type ReposListForUserRequest struct {
	PathParams  ReposListForUserPathParams
	QueryParams ReposListForUserQueryParams
}

type ReposListForUserResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	MinimalRepositories []shared.MinimalRepository
}
