package operations

import (
	"openapi/pkg/models/shared"
)

type GetCalendarStateXAmzTargetEnum string

const (
	GetCalendarStateXAmzTargetEnumAmazonSsmGetCalendarState GetCalendarStateXAmzTargetEnum = "AmazonSSM.GetCalendarState"
)

type GetCalendarStateHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCalendarStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCalendarStateRequest struct {
	Headers GetCalendarStateHeaders
	Request shared.GetCalendarStateRequest `request:"mediaType=application/json"`
}

type GetCalendarStateResponse struct {
	ContentType                  string
	GetCalendarStateResponse     *shared.GetCalendarStateResponse
	InternalServerError          *interface{}
	InvalidDocument              *interface{}
	InvalidDocumentType          *interface{}
	StatusCode                   int64
	UnsupportedCalendarException *interface{}
}
