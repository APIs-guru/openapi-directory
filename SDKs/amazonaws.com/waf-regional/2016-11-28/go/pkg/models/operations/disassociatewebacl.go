package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateWebAclxAmzTargetEnum string

const (
	DisassociateWebAclxAmzTargetEnumAwswafRegional20161128DisassociateWebACL DisassociateWebAclxAmzTargetEnum = "AWSWAF_Regional_20161128.DisassociateWebACL"
)

type DisassociateWebACLHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateWebAclxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateWebACLRequest struct {
	Headers DisassociateWebACLHeaders
	Request shared.DisassociateWebACLRequest `request:"mediaType=application/json"`
}

type DisassociateWebACLResponse struct {
	ContentType                  string
	DisassociateWebACLResponse   map[string]interface{}
	StatusCode                   int64
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafInvalidParameterException *interface{}
	WafNonexistentItemException  *interface{}
}
