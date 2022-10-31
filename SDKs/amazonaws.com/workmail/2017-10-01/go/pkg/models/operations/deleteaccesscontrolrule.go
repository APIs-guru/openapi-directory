package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccessControlRuleXAmzTargetEnum string

const (
	DeleteAccessControlRuleXAmzTargetEnumWorkMailServiceDeleteAccessControlRule DeleteAccessControlRuleXAmzTargetEnum = "WorkMailService.DeleteAccessControlRule"
)

type DeleteAccessControlRuleHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAccessControlRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteAccessControlRuleRequest struct {
	Headers DeleteAccessControlRuleHeaders
	Request shared.DeleteAccessControlRuleRequest `request:"mediaType=application/json"`
}

type DeleteAccessControlRuleResponse struct {
	ContentType                     string
	DeleteAccessControlRuleResponse map[string]interface{}
	OrganizationNotFoundException   *interface{}
	OrganizationStateException      *interface{}
	StatusCode                      int64
}
