package operations

import (
	"openapi/pkg/models/shared"
)

type StartReportCreationXAmzTargetEnum string

const (
	StartReportCreationXAmzTargetEnumResourceGroupsTaggingApi20170126StartReportCreation StartReportCreationXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.StartReportCreation"
)

type StartReportCreationHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReportCreationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
