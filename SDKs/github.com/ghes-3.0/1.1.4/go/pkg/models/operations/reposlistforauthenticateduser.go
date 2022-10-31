package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReposListForAuthenticatedUserDirectionEnum string

const (
	ReposListForAuthenticatedUserDirectionEnumAsc  ReposListForAuthenticatedUserDirectionEnum = "asc"
	ReposListForAuthenticatedUserDirectionEnumDesc ReposListForAuthenticatedUserDirectionEnum = "desc"
)

type ReposListForAuthenticatedUserSortEnum string

const (
	ReposListForAuthenticatedUserSortEnumCreated  ReposListForAuthenticatedUserSortEnum = "created"
	ReposListForAuthenticatedUserSortEnumUpdated  ReposListForAuthenticatedUserSortEnum = "updated"
	ReposListForAuthenticatedUserSortEnumPushed   ReposListForAuthenticatedUserSortEnum = "pushed"
	ReposListForAuthenticatedUserSortEnumFullName ReposListForAuthenticatedUserSortEnum = "full_name"
)

type ReposListForAuthenticatedUserTypeEnum string

const (
	ReposListForAuthenticatedUserTypeEnumAll     ReposListForAuthenticatedUserTypeEnum = "all"
	ReposListForAuthenticatedUserTypeEnumOwner   ReposListForAuthenticatedUserTypeEnum = "owner"
	ReposListForAuthenticatedUserTypeEnumPublic  ReposListForAuthenticatedUserTypeEnum = "public"
	ReposListForAuthenticatedUserTypeEnumPrivate ReposListForAuthenticatedUserTypeEnum = "private"
	ReposListForAuthenticatedUserTypeEnumMember  ReposListForAuthenticatedUserTypeEnum = "member"
)

type ReposListForAuthenticatedUserVisibilityEnum string

const (
	ReposListForAuthenticatedUserVisibilityEnumAll     ReposListForAuthenticatedUserVisibilityEnum = "all"
	ReposListForAuthenticatedUserVisibilityEnumPublic  ReposListForAuthenticatedUserVisibilityEnum = "public"
	ReposListForAuthenticatedUserVisibilityEnumPrivate ReposListForAuthenticatedUserVisibilityEnum = "private"
)

type ReposListForAuthenticatedUserQueryParams struct {
	Affiliation *string                                      `queryParam:"style=form,explode=true,name=affiliation"`
	Before      *time.Time                                   `queryParam:"style=form,explode=true,name=before"`
	Direction   *ReposListForAuthenticatedUserDirectionEnum  `queryParam:"style=form,explode=true,name=direction"`
	Page        *int64                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage     *int64                                       `queryParam:"style=form,explode=true,name=per_page"`
	Since       *time.Time                                   `queryParam:"style=form,explode=true,name=since"`
	Sort        *ReposListForAuthenticatedUserSortEnum       `queryParam:"style=form,explode=true,name=sort"`
	Type        *ReposListForAuthenticatedUserTypeEnum       `queryParam:"style=form,explode=true,name=type"`
	Visibility  *ReposListForAuthenticatedUserVisibilityEnum `queryParam:"style=form,explode=true,name=visibility"`
}

type ReposListForAuthenticatedUserRequest struct {
	QueryParams ReposListForAuthenticatedUserQueryParams
}

type ReposListForAuthenticatedUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Repositories    []shared.Repository
	ValidationError *shared.ValidationError
}
