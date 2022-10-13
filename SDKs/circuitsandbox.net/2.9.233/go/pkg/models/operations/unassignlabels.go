package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignLabelsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UnassignLabelsRequestBody struct {
	LabelIds []string `form:"name=labelIds"`
}

type UnassignLabelsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UnassignLabelsRequest struct {
	PathParams UnassignLabelsPathParams
	Request    UnassignLabelsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UnassignLabelsSecurity
}

type UnassignLabelsResponse struct {
	Body        []byte
	ContentType string
	LabelIds    []interface{}
	StatusCode  int64
}
