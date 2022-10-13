package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOutpostHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateOutpostRequestBody struct {
	AvailabilityZone   *string           `json:"AvailabilityZone"`
	AvailabilityZoneID *string           `json:"AvailabilityZoneId"`
	Description        *string           `json:"Description"`
	Name               string            `json:"Name"`
	SiteID             string            `json:"SiteId"`
	Tags               map[string]string `json:"Tags"`
}

type CreateOutpostRequest struct {
	Headers CreateOutpostHeaders
	Request CreateOutpostRequestBody `request:"mediaType=application/json"`
}

type CreateOutpostResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateOutpostOutput           *shared.CreateOutpostOutput
	InternalServerException       *interface{}
	NotFoundException             *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
