package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQualificationTypeXAmzTargetEnum string

const (
	DeleteQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117DeleteQualificationType DeleteQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.DeleteQualificationType"
)

type DeleteQualificationTypeHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteQualificationTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteQualificationTypeRequest struct {
	Headers DeleteQualificationTypeHeaders
	Request shared.DeleteQualificationTypeRequest `request:"mediaType=application/json"`
}

type DeleteQualificationTypeResponse struct {
	ContentType                     string
	DeleteQualificationTypeResponse map[string]interface{}
	RequestError                    *interface{}
	ServiceFault                    *interface{}
	StatusCode                      int64
}
