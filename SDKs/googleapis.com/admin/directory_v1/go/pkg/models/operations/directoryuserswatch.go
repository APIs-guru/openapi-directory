package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryUsersWatchEventEnum string

const (
	DirectoryUsersWatchEventEnumAdd       DirectoryUsersWatchEventEnum = "add"
	DirectoryUsersWatchEventEnumDelete    DirectoryUsersWatchEventEnum = "delete"
	DirectoryUsersWatchEventEnumMakeAdmin DirectoryUsersWatchEventEnum = "makeAdmin"
	DirectoryUsersWatchEventEnumUndelete  DirectoryUsersWatchEventEnum = "undelete"
	DirectoryUsersWatchEventEnumUpdate    DirectoryUsersWatchEventEnum = "update"
)

type DirectoryUsersWatchOrderByEnum string

const (
	DirectoryUsersWatchOrderByEnumEmail      DirectoryUsersWatchOrderByEnum = "email"
	DirectoryUsersWatchOrderByEnumFamilyName DirectoryUsersWatchOrderByEnum = "familyName"
	DirectoryUsersWatchOrderByEnumGivenName  DirectoryUsersWatchOrderByEnum = "givenName"
)

type DirectoryUsersWatchProjectionEnum string

const (
	DirectoryUsersWatchProjectionEnumBasic  DirectoryUsersWatchProjectionEnum = "basic"
	DirectoryUsersWatchProjectionEnumCustom DirectoryUsersWatchProjectionEnum = "custom"
	DirectoryUsersWatchProjectionEnumFull   DirectoryUsersWatchProjectionEnum = "full"
)

type DirectoryUsersWatchSortOrderEnum string

const (
	DirectoryUsersWatchSortOrderEnumAscending  DirectoryUsersWatchSortOrderEnum = "ASCENDING"
	DirectoryUsersWatchSortOrderEnumDescending DirectoryUsersWatchSortOrderEnum = "DESCENDING"
)

type DirectoryUsersWatchViewTypeEnum string

const (
	DirectoryUsersWatchViewTypeEnumAdminView    DirectoryUsersWatchViewTypeEnum = "admin_view"
	DirectoryUsersWatchViewTypeEnumDomainPublic DirectoryUsersWatchViewTypeEnum = "domain_public"
)

type DirectoryUsersWatchQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                            `queryParam:"style=form,explode=true,name=callback"`
	CustomFieldMask *string                            `queryParam:"style=form,explode=true,name=customFieldMask"`
	Customer        *string                            `queryParam:"style=form,explode=true,name=customer"`
	Domain          *string                            `queryParam:"style=form,explode=true,name=domain"`
	Event           *DirectoryUsersWatchEventEnum      `queryParam:"style=form,explode=true,name=event"`
	Fields          *string                            `queryParam:"style=form,explode=true,name=fields"`
	Key             *string                            `queryParam:"style=form,explode=true,name=key"`
	MaxResults      *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy         *DirectoryUsersWatchOrderByEnum    `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken       *string                            `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection      *DirectoryUsersWatchProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	Query           *string                            `queryParam:"style=form,explode=true,name=query"`
	QuotaUser       *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted     *string                            `queryParam:"style=form,explode=true,name=showDeleted"`
	SortOrder       *DirectoryUsersWatchSortOrderEnum  `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType      *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	ViewType        *DirectoryUsersWatchViewTypeEnum   `queryParam:"style=form,explode=true,name=viewType"`
}

type DirectoryUsersWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryUsersWatchSecurity struct {
	Option1 *DirectoryUsersWatchSecurityOption1 `security:"option"`
	Option2 *DirectoryUsersWatchSecurityOption2 `security:"option"`
	Option3 *DirectoryUsersWatchSecurityOption3 `security:"option"`
}

type DirectoryUsersWatchRequest struct {
	QueryParams DirectoryUsersWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DirectoryUsersWatchSecurity
}

type DirectoryUsersWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
