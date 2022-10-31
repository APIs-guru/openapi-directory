package operations

import (
	"openapi/pkg/models/shared"
)

type OptOutOfProgramSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type OptOutOfProgramRequest struct {
	Request  shared.Program `request:"mediaType=application/json"`
	Security OptOutOfProgramSecurity
}

type OptOutOfProgramResponse struct {
	ContentType                             string
	StatusCode                              int64
	OptOutOfProgram200ApplicationJSONObject map[string]interface{}
}
