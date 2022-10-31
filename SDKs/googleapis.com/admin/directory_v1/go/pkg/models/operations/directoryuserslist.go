package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryUsersListEventEnum string

const (
	DirectoryUsersListEventEnumAdd       DirectoryUsersListEventEnum = "add"
	DirectoryUsersListEventEnumDelete    DirectoryUsersListEventEnum = "delete"
	DirectoryUsersListEventEnumMakeAdmin DirectoryUsersListEventEnum = "makeAdmin"
	DirectoryUsersListEventEnumUndelete  DirectoryUsersListEventEnum = "undelete"
	DirectoryUsersListEventEnumUpdate    DirectoryUsersListEventEnum = "update"
)

type DirectoryUsersListOrderByEnum string

const (
	DirectoryUsersListOrderByEnumEmail      DirectoryUsersListOrderByEnum = "email"
	DirectoryUsersListOrderByEnumFamilyName DirectoryUsersListOrderByEnum = "familyName"
	DirectoryUsersListOrderByEnumGivenName  DirectoryUsersListOrderByEnum = "givenName"
)

type DirectoryUsersListProjectionEnum string

const (
	DirectoryUsersListProjectionEnumBasic  DirectoryUsersListProjectionEnum = "basic"
	DirectoryUsersListProjectionEnumCustom DirectoryUsersListProjectionEnum = "custom"
	DirectoryUsersListProjectionEnumFull   DirectoryUsersListProjectionEnum = "full"
)

type DirectoryUsersListSortOrderEnum string

const (
	DirectoryUsersListSortOrderEnumAscending  DirectoryUsersListSortOrderEnum = "ASCENDING"
	DirectoryUsersListSortOrderEnumDescending DirectoryUsersListSortOrderEnum = "DESCENDING"
)

type DirectoryUsersListViewTypeEnum string

const (
	DirectoryUsersListViewTypeEnumAdminView    DirectoryUsersListViewTypeEnum = "admin_view"
	DirectoryUsersListViewTypeEnumDomainPublic DirectoryUsersListViewTypeEnum = "domain_public"
)

type DirectoryUsersListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                           `queryParam:"style=form,explode=true,name=callback"`
	CustomFieldMask *string                           `queryParam:"style=form,explode=true,name=customFieldMask"`
	Customer        *string                           `queryParam:"style=form,explode=true,name=customer"`
	Domain          *string                           `queryParam:"style=form,explode=true,name=domain"`
	Event           *DirectoryUsersListEventEnum      `queryParam:"style=form,explode=true,name=event"`
	Fields          *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string                           `queryParam:"style=form,explode=true,name=key"`
	MaxResults      *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy         *DirectoryUsersListOrderByEnum    `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken       *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection      *DirectoryUsersListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	Query           *string                           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser       *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted     *string                           `queryParam:"style=form,explode=true,name=showDeleted"`
	SortOrder       *DirectoryUsersListSortOrderEnum  `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType      *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ViewType        *DirectoryUsersListViewTypeEnum   `queryParam:"style=form,explode=true,name=viewType"`
}

type DirectoryUsersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersListSecurity struct {
	Option1 *DirectoryUsersListSecurityOption1 `security:"option"`
	Option2 *DirectoryUsersListSecurityOption2 `security:"option"`
	Option3 *DirectoryUsersListSecurityOption3 `security:"option"`
}

type DirectoryUsersListRequest struct {
	QueryParams DirectoryUsersListQueryParams
	Security    DirectoryUsersListSecurity
}

type DirectoryUsersListResponse struct {
	ContentType string
	StatusCode  int64
	Users       *shared.Users
}
