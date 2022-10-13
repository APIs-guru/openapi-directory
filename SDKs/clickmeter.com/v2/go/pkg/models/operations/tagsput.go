package operations

import (
	"openapi/pkg/models/shared"
)

type TagsPutRequests struct {
	APICoreDtoTagsTag  *shared.APICoreDtoTagsTag `request:"mediaType=application/json"`
	APICoreDtoTagsTag1 *shared.APICoreDtoTagsTag `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreDtoTagsTag2 *shared.APICoreDtoTagsTag `request:"mediaType=text/json"`
}

type TagsPutRequest struct {
	Request TagsPutRequests
}

type TagsPutResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}
