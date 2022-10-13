package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGrantPermissionsXAmzTargetEnum string

const (
	BatchGrantPermissionsXAmzTargetEnumAwsLakeFormationBatchGrantPermissions BatchGrantPermissionsXAmzTargetEnum = "AWSLakeFormation.BatchGrantPermissions"
)

type BatchGrantPermissionsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGrantPermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGrantPermissionsRequest struct {
	Headers BatchGrantPermissionsHeaders
	Request shared.BatchGrantPermissionsRequest `request:"mediaType=application/json"`
}

type BatchGrantPermissionsResponse struct {
	BatchGrantPermissionsResponse *shared.BatchGrantPermissionsResponse
	ContentType                   string
	InvalidInputException         *interface{}
	OperationTimeoutException     *interface{}
	StatusCode                    int64
}
