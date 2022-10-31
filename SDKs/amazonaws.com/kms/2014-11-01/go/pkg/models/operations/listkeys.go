package operations

import (
	"openapi/pkg/models/shared"
)

type ListKeysQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=Limit"`
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListKeysXAmzTargetEnum string

const (
	ListKeysXAmzTargetEnumTrentServiceListKeys ListKeysXAmzTargetEnum = "TrentService.ListKeys"
)

type ListKeysHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListKeysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListKeysRequest struct {
	QueryParams ListKeysQueryParams
	Headers     ListKeysHeaders
	Request     shared.ListKeysRequest `request:"mediaType=application/json"`
}

type ListKeysResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidMarkerException     *interface{}
	KmsInternalException       *interface{}
	ListKeysResponse           *shared.ListKeysResponse
	StatusCode                 int64
}
