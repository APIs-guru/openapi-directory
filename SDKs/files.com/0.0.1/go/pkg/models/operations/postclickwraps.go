package operations

import (
	"openapi/pkg/models/shared"
)

type PostClickwrapsRequestBodyUseWithBundlesEnum string

const (
	PostClickwrapsRequestBodyUseWithBundlesEnumNone      PostClickwrapsRequestBodyUseWithBundlesEnum = "none"
	PostClickwrapsRequestBodyUseWithBundlesEnumAvailable PostClickwrapsRequestBodyUseWithBundlesEnum = "available"
	PostClickwrapsRequestBodyUseWithBundlesEnumRequire   PostClickwrapsRequestBodyUseWithBundlesEnum = "require"
)

type PostClickwrapsRequestBodyUseWithInboxesEnum string

const (
	PostClickwrapsRequestBodyUseWithInboxesEnumNone      PostClickwrapsRequestBodyUseWithInboxesEnum = "none"
	PostClickwrapsRequestBodyUseWithInboxesEnumAvailable PostClickwrapsRequestBodyUseWithInboxesEnum = "available"
	PostClickwrapsRequestBodyUseWithInboxesEnumRequire   PostClickwrapsRequestBodyUseWithInboxesEnum = "require"
)

type PostClickwrapsRequestBodyUseWithUsersEnum string

const (
	PostClickwrapsRequestBodyUseWithUsersEnumNone    PostClickwrapsRequestBodyUseWithUsersEnum = "none"
	PostClickwrapsRequestBodyUseWithUsersEnumRequire PostClickwrapsRequestBodyUseWithUsersEnum = "require"
)

type PostClickwrapsRequestBody struct {
	Body           *string                                      `multipartForm:"name=body"`
	Name           *string                                      `multipartForm:"name=name"`
	UseWithBundles *PostClickwrapsRequestBodyUseWithBundlesEnum `multipartForm:"name=use_with_bundles"`
	UseWithInboxes *PostClickwrapsRequestBodyUseWithInboxesEnum `multipartForm:"name=use_with_inboxes"`
	UseWithUsers   *PostClickwrapsRequestBodyUseWithUsersEnum   `multipartForm:"name=use_with_users"`
}

type PostClickwrapsRequest struct {
	Request *PostClickwrapsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostClickwrapsResponse struct {
	ClickwrapEntity *shared.ClickwrapEntity
	ContentType     string
	StatusCode      int64
}
