package operations

import (
	"openapi/pkg/models/shared"
)

type CodesOfConductGetConductCodePathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type CodesOfConductGetConductCode415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type CodesOfConductGetConductCodeRequest struct {
	PathParams CodesOfConductGetConductCodePathParams
}

type CodesOfConductGetConductCodeResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	BasicError                                           *shared.BasicError
	CodeOfConduct                                        *shared.CodeOfConduct
	CodesOfConductGetConductCode415ApplicationJSONObject *CodesOfConductGetConductCode415ApplicationJSON
}
