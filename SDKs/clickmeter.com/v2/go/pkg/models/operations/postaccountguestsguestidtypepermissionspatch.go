package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum string

const (
	PostAccountGuestsGuestIDTypePermissionsPatchTypeEnumDatapoint PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum = "datapoint"
	PostAccountGuestsGuestIDTypePermissionsPatchTypeEnumGroup     PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum = "group"
)

type PostAccountGuestsGuestIDTypePermissionsPatchPathParams struct {
	GuestID int64                                                `pathParam:"style=simple,explode=false,name=guestId"`
	Type    PostAccountGuestsGuestIDTypePermissionsPatchTypeEnum `pathParam:"style=simple,explode=false,name=type"`
}

type PostAccountGuestsGuestIDTypePermissionsPatchRequests struct {
	APICoreRequestsPermissionPatchRequest  *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=application/json"`
	APICoreRequestsPermissionPatchRequest1 *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreRequestsPermissionPatchRequest2 *shared.APICoreRequestsPermissionPatchRequest `request:"mediaType=text/json"`
	ApplicationXML                         []byte                                        `request:"mediaType=application/xml"`
	TextXML                                []byte                                        `request:"mediaType=text/xml"`
}

type PostAccountGuestsGuestIDTypePermissionsPatchRequest struct {
	PathParams PostAccountGuestsGuestIDTypePermissionsPatchPathParams
	Request    PostAccountGuestsGuestIDTypePermissionsPatchRequests
}

type PostAccountGuestsGuestIDTypePermissionsPatchResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}
