package operations

import (
	"openapi/pkg/models/shared"
)

type AssignLabelsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AssignLabelsRequestBody struct {
	Labels []string `form:"name=labels"`
}

type AssignLabelsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AssignLabelsRequest struct {
	PathParams AssignLabelsPathParams
	Request    AssignLabelsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   AssignLabelsSecurity
}

type AssignLabelsResponse struct {
	Body        []byte
	ContentType string
	LabelIds    []interface{}
	StatusCode  int64
}
