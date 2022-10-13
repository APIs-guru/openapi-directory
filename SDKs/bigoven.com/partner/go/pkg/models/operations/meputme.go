package operations

import (
	"openapi/pkg/models/shared"
)

type MePutMeRequests struct {
	Api2ModelsBigOvenUser  *shared.Api2ModelsBigOvenUser `request:"mediaType=application/json"`
	Api2ModelsBigOvenUser1 *shared.Api2ModelsBigOvenUser `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ModelsBigOvenUser2 *shared.Api2ModelsBigOvenUser `request:"mediaType=text/json"`
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type MePutMeRequest struct {
	Request MePutMeRequests
}

type MePutMeResponse struct {
	Api2ModelsBigOvenUser *shared.Api2ModelsBigOvenUser
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
