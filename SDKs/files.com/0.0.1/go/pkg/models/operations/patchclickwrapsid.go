package operations

import (
	"openapi/pkg/models/shared"
)

type PatchClickwrapsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchClickwrapsIDRequestBodyUseWithBundlesEnum string

const (
	PatchClickwrapsIDRequestBodyUseWithBundlesEnumNone      PatchClickwrapsIDRequestBodyUseWithBundlesEnum = "none"
	PatchClickwrapsIDRequestBodyUseWithBundlesEnumAvailable PatchClickwrapsIDRequestBodyUseWithBundlesEnum = "available"
	PatchClickwrapsIDRequestBodyUseWithBundlesEnumRequire   PatchClickwrapsIDRequestBodyUseWithBundlesEnum = "require"
)

type PatchClickwrapsIDRequestBodyUseWithInboxesEnum string

const (
	PatchClickwrapsIDRequestBodyUseWithInboxesEnumNone      PatchClickwrapsIDRequestBodyUseWithInboxesEnum = "none"
	PatchClickwrapsIDRequestBodyUseWithInboxesEnumAvailable PatchClickwrapsIDRequestBodyUseWithInboxesEnum = "available"
	PatchClickwrapsIDRequestBodyUseWithInboxesEnumRequire   PatchClickwrapsIDRequestBodyUseWithInboxesEnum = "require"
)

type PatchClickwrapsIDRequestBodyUseWithUsersEnum string

const (
	PatchClickwrapsIDRequestBodyUseWithUsersEnumNone    PatchClickwrapsIDRequestBodyUseWithUsersEnum = "none"
	PatchClickwrapsIDRequestBodyUseWithUsersEnumRequire PatchClickwrapsIDRequestBodyUseWithUsersEnum = "require"
)

type PatchClickwrapsIDRequestBody struct {
	Body           *string                                         `multipartForm:"name=body"`
	Name           *string                                         `multipartForm:"name=name"`
	UseWithBundles *PatchClickwrapsIDRequestBodyUseWithBundlesEnum `multipartForm:"name=use_with_bundles"`
	UseWithInboxes *PatchClickwrapsIDRequestBodyUseWithInboxesEnum `multipartForm:"name=use_with_inboxes"`
	UseWithUsers   *PatchClickwrapsIDRequestBodyUseWithUsersEnum   `multipartForm:"name=use_with_users"`
}

type PatchClickwrapsIDRequest struct {
	PathParams PatchClickwrapsIDPathParams
	Request    *PatchClickwrapsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchClickwrapsIDResponse struct {
	ClickwrapEntity *shared.ClickwrapEntity
	ContentType     string
	StatusCode      int64
}
