package operations

import (
	"openapi/pkg/models/shared"
)

type BatchRevokePermissionsXAmzTargetEnum string

const (
	BatchRevokePermissionsXAmzTargetEnumAwsLakeFormationBatchRevokePermissions BatchRevokePermissionsXAmzTargetEnum = "AWSLakeFormation.BatchRevokePermissions"
)

type BatchRevokePermissionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchRevokePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchRevokePermissionsRequest struct {
	Headers BatchRevokePermissionsHeaders
	Request shared.BatchRevokePermissionsRequest `request:"mediaType=application/json"`
}

type BatchRevokePermissionsResponse struct {
	BatchRevokePermissionsResponse *shared.BatchRevokePermissionsResponse
	ContentType                    string
	InvalidInputException          *interface{}
	OperationTimeoutException      *interface{}
	StatusCode                     int64
}
