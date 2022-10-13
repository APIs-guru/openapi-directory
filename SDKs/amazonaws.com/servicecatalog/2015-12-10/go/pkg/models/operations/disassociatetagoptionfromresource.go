package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateTagOptionFromResourceXAmzTargetEnum string

const (
	DisassociateTagOptionFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateTagOptionFromResource DisassociateTagOptionFromResourceXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateTagOptionFromResource"
)

type DisassociateTagOptionFromResourceHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateTagOptionFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateTagOptionFromResourceRequest struct {
	Headers DisassociateTagOptionFromResourceHeaders
	Request shared.DisassociateTagOptionFromResourceInput `request:"mediaType=application/json"`
}

type DisassociateTagOptionFromResourceResponse struct {
	ContentType                             string
	DisassociateTagOptionFromResourceOutput map[string]interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	TagOptionNotMigratedException           *interface{}
}
