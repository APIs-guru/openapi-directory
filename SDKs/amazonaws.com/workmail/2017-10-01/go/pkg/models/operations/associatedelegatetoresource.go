package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateDelegateToResourceXAmzTargetEnum string

const (
	AssociateDelegateToResourceXAmzTargetEnumWorkMailServiceAssociateDelegateToResource AssociateDelegateToResourceXAmzTargetEnum = "WorkMailService.AssociateDelegateToResource"
)

type AssociateDelegateToResourceHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateDelegateToResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateDelegateToResourceRequest struct {
	Headers AssociateDelegateToResourceHeaders
	Request shared.AssociateDelegateToResourceRequest `request:"mediaType=application/json"`
}

type AssociateDelegateToResourceResponse struct {
	AssociateDelegateToResourceResponse map[string]interface{}
	ContentType                         string
	EntityNotFoundException             *interface{}
	EntityStateException                *interface{}
	InvalidParameterException           *interface{}
	OrganizationNotFoundException       *interface{}
	OrganizationStateException          *interface{}
	StatusCode                          int64
}
