package operations

import (
	"openapi/pkg/models/shared"
)

type MePutMePersonalRequests struct {
	Api2ModelsPersonal  *shared.Api2ModelsPersonal `request:"mediaType=application/json"`
	Api2ModelsPersonal1 *shared.Api2ModelsPersonal `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ModelsPersonal2 *shared.Api2ModelsPersonal `request:"mediaType=text/json"`
	ApplicationXML      []byte                     `request:"mediaType=application/xml"`
	TextXML             []byte                     `request:"mediaType=text/xml"`
}

type MePutMePersonalRequest struct {
	Request MePutMePersonalRequests
}

type MePutMePersonalResponse struct {
	Api2ModelsBigOvenUser *shared.Api2ModelsBigOvenUser
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
