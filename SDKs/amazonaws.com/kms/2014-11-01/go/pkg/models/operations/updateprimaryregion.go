package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePrimaryRegionXAmzTargetEnum string

const (
	UpdatePrimaryRegionXAmzTargetEnumTrentServiceUpdatePrimaryRegion UpdatePrimaryRegionXAmzTargetEnum = "TrentService.UpdatePrimaryRegion"
)

type UpdatePrimaryRegionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePrimaryRegionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePrimaryRegionRequest struct {
	Headers UpdatePrimaryRegionHeaders
	Request shared.UpdatePrimaryRegionRequest `request:"mediaType=application/json"`
}

type UpdatePrimaryRegionResponse struct {
	ContentType                   string
	DisabledException             *interface{}
	InvalidArnException           *interface{}
	KmsInternalException          *interface{}
	KmsInvalidStateException      *interface{}
	NotFoundException             *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
