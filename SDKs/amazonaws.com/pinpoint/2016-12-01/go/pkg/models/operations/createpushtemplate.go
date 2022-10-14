package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePushTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
}

type CreatePushTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePushTemplateRequestBodyPushNotificationTemplateRequest struct {
	Adm                  *shared.AndroidPushNotificationTemplate `json:"ADM,omitempty"`
	Apns                 *shared.ApnsPushNotificationTemplate    `json:"APNS,omitempty"`
	Baidu                *shared.AndroidPushNotificationTemplate `json:"Baidu,omitempty"`
	Default              *shared.DefaultPushNotificationTemplate `json:"Default,omitempty"`
	DefaultSubstitutions *string                                 `json:"DefaultSubstitutions,omitempty"`
	Gcm                  *shared.AndroidPushNotificationTemplate `json:"GCM,omitempty"`
	RecommenderID        *string                                 `json:"RecommenderId,omitempty"`
	TemplateDescription  *string                                 `json:"TemplateDescription,omitempty"`
	Tags                 map[string]string                       `json:"tags,omitempty"`
}

type CreatePushTemplateRequestBody struct {
	PushNotificationTemplateRequest CreatePushTemplateRequestBodyPushNotificationTemplateRequest `json:"PushNotificationTemplateRequest"`
}

type CreatePushTemplateRequest struct {
	PathParams CreatePushTemplatePathParams
	Headers    CreatePushTemplateHeaders
	Request    CreatePushTemplateRequestBody `request:"mediaType=application/json"`
}

type CreatePushTemplateResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreatePushTemplateResponse   *shared.CreatePushTemplateResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
