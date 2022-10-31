package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccessControlRulesXAmzTargetEnum string

const (
	ListAccessControlRulesXAmzTargetEnumWorkMailServiceListAccessControlRules ListAccessControlRulesXAmzTargetEnum = "WorkMailService.ListAccessControlRules"
)

type ListAccessControlRulesHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAccessControlRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAccessControlRulesRequest struct {
	Headers ListAccessControlRulesHeaders
	Request shared.ListAccessControlRulesRequest `request:"mediaType=application/json"`
}

type ListAccessControlRulesResponse struct {
	ContentType                    string
	ListAccessControlRulesResponse *shared.ListAccessControlRulesResponse
	OrganizationNotFoundException  *interface{}
	OrganizationStateException     *interface{}
	StatusCode                     int64
}
