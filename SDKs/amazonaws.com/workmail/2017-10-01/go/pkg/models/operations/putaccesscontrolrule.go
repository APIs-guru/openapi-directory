package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccessControlRuleXAmzTargetEnum string

const (
	PutAccessControlRuleXAmzTargetEnumWorkMailServicePutAccessControlRule PutAccessControlRuleXAmzTargetEnum = "WorkMailService.PutAccessControlRule"
)

type PutAccessControlRuleHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccessControlRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutAccessControlRuleRequest struct {
	Headers PutAccessControlRuleHeaders
	Request shared.PutAccessControlRuleRequest `request:"mediaType=application/json"`
}

type PutAccessControlRuleResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	InvalidParameterException     *interface{}
	LimitExceededException        *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	PutAccessControlRuleResponse  map[string]interface{}
	StatusCode                    int64
}
