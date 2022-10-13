package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryGroupsListOrderByEnum string

const (
	DirectoryGroupsListOrderByEnumEmail DirectoryGroupsListOrderByEnum = "email"
)

type DirectoryGroupsListSortOrderEnum string

const (
	DirectoryGroupsListSortOrderEnumAscending  DirectoryGroupsListSortOrderEnum = "ASCENDING"
	DirectoryGroupsListSortOrderEnumDescending DirectoryGroupsListSortOrderEnum = "DESCENDING"
)

type DirectoryGroupsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                           `queryParam:"style=form,explode=true,name=callback"`
	Customer       *string                           `queryParam:"style=form,explode=true,name=customer"`
	Domain         *string                           `queryParam:"style=form,explode=true,name=domain"`
	Fields         *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *DirectoryGroupsListOrderByEnum   `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken      *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string                           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	SortOrder      *DirectoryGroupsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	UserKey        *string                           `queryParam:"style=form,explode=true,name=userKey"`
}

type DirectoryGroupsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryGroupsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryGroupsListSecurity struct {
	Option1 *DirectoryGroupsListSecurityOption1 `security:"option"`
	Option2 *DirectoryGroupsListSecurityOption2 `security:"option"`
}

type DirectoryGroupsListRequest struct {
	QueryParams DirectoryGroupsListQueryParams
	Security    DirectoryGroupsListSecurity
}

type DirectoryGroupsListResponse struct {
	ContentType string
	Groups      *shared.Groups
	StatusCode  int64
}
