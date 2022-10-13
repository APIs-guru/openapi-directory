package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReportCreationXAmzTargetEnum string

const (
	DescribeReportCreationXAmzTargetEnumResourceGroupsTaggingApi20170126DescribeReportCreation DescribeReportCreationXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation"
)

type DescribeReportCreationHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReportCreationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReportCreationRequest struct {
	Headers DescribeReportCreationHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeReportCreationResponse struct {
	ConstraintViolationException *interface{}
	ContentType                  string
	DescribeReportCreationOutput *shared.DescribeReportCreationOutput
	InternalServiceException     *interface{}
	InvalidParameterException    *interface{}
	StatusCode                   int64
	ThrottledException           *interface{}
}
