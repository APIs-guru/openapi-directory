package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateQualificationTypeXAmzTargetEnum string

const (
	UpdateQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117UpdateQualificationType UpdateQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateQualificationType"
)

type UpdateQualificationTypeHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateQualificationTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateQualificationTypeRequest struct {
	Headers UpdateQualificationTypeHeaders
	Request shared.UpdateQualificationTypeRequest `request:"mediaType=application/json"`
}

type UpdateQualificationTypeResponse struct {
	ContentType                     string
	RequestError                    *interface{}
	ServiceFault                    *interface{}
	StatusCode                      int64
	UpdateQualificationTypeResponse *shared.UpdateQualificationTypeResponse
}
