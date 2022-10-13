package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePushTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type UpdatePushTemplateQueryParams struct {
	CreateNewVersion *bool   `queryParam:"style=form,explode=true,name=create-new-version"`
	Version          *string `queryParam:"style=form,explode=true,name=version"`
}

type UpdatePushTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePushTemplateRequestBodyPushNotificationTemplateRequest struct {
	Adm                  *shared.AndroidPushNotificationTemplate `json:"ADM"`
	Apns                 *shared.ApnsPushNotificationTemplate    `json:"APNS"`
	Baidu                *shared.AndroidPushNotificationTemplate `json:"Baidu"`
	Default              *shared.DefaultPushNotificationTemplate `json:"Default"`
	DefaultSubstitutions *string                                 `json:"DefaultSubstitutions"`
	Gcm                  *shared.AndroidPushNotificationTemplate `json:"GCM"`
	RecommenderID        *string                                 `json:"RecommenderId"`
	TemplateDescription  *string                                 `json:"TemplateDescription"`
	Tags                 map[string]string                       `json:"tags"`
}

type UpdatePushTemplateRequestBody struct {
	PushNotificationTemplateRequest UpdatePushTemplateRequestBodyPushNotificationTemplateRequest `json:"PushNotificationTemplateRequest"`
}

type UpdatePushTemplateRequest struct {
	PathParams  UpdatePushTemplatePathParams
	QueryParams UpdatePushTemplateQueryParams
	Headers     UpdatePushTemplateHeaders
	Request     UpdatePushTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdatePushTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdatePushTemplateResponse   *shared.UpdatePushTemplateResponse
}
