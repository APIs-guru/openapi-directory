package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMobileDeviceAccessRuleXAmzTargetEnum string

const (
	DeleteMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceDeleteMobileDeviceAccessRule DeleteMobileDeviceAccessRuleXAmzTargetEnum = "WorkMailService.DeleteMobileDeviceAccessRule"
)

type DeleteMobileDeviceAccessRuleHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMobileDeviceAccessRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
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
