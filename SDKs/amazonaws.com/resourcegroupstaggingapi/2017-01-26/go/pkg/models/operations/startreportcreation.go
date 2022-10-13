package operations

import (
	"openapi/pkg/models/shared"
)

type StartReportCreationXAmzTargetEnum string

const (
	StartReportCreationXAmzTargetEnumResourceGroupsTaggingApi20170126StartReportCreation StartReportCreationXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.StartReportCreation"
)

type StartReportCreationHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReportCreationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartReportCreationRequest struct {
	Headers StartReportCreationHeaders
	Request shared.StartReportCreationInput `request:"mediaType=application/json"`
}

type StartReportCreationResponse struct {
	ConcurrentModificationException *interface{}
	ConstraintViolationException    *interface{}
	ContentType                     string
	InternalServiceException        *interface{}
	InvalidParameterException       *interface{}
	StartReportCreationOutput       map[string]interface{}
	StatusCode                      int64
	ThrottledException              *interface{}
}
