package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessControlEffectXAmzTargetEnum string

const (
	GetAccessControlEffectXAmzTargetEnumWorkMailServiceGetAccessControlEffect GetAccessControlEffectXAmzTargetEnum = "WorkMailService.GetAccessControlEffect"
)

type GetAccessControlEffectHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccessControlEffectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAccessControlEffectRequest struct {
	Headers GetAccessControlEffectHeaders
	Request shared.GetAccessControlEffectRequest `request:"mediaType=application/json"`
}

type GetAccessControlEffectResponse struct {
	ContentType                    string
	EntityNotFoundException        *interface{}
	GetAccessControlEffectResponse *shared.GetAccessControlEffectResponse
	InvalidParameterException      *interface{}
	OrganizationNotFoundException  *interface{}
	OrganizationStateException     *interface{}
	StatusCode                     int64
}
