package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMobileDeviceAccessRuleXAmzTargetEnum string

const (
	DeleteMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceDeleteMobileDeviceAccessRule DeleteMobileDeviceAccessRuleXAmzTargetEnum = "WorkMailService.DeleteMobileDeviceAccessRule"
)

type DeleteMobileDeviceAccessRuleHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMobileDeviceAccessRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteMobileDeviceAccessRuleRequest struct {
	Headers DeleteMobileDeviceAccessRuleHeaders
	Request shared.DeleteMobileDeviceAccessRuleRequest `request:"mediaType=application/json"`
}

type DeleteMobileDeviceAccessRuleResponse struct {
	ContentType                          string
	DeleteMobileDeviceAccessRuleResponse map[string]interface{}
	InvalidParameterException            *interface{}
	OrganizationNotFoundException        *interface{}
	OrganizationStateException           *interface{}
	StatusCode                           int64
}
