package operations

import (
	"openapi/pkg/models/shared"
)

type RevokePermissionsXAmzTargetEnum string

const (
	RevokePermissionsXAmzTargetEnumAwsLakeFormationRevokePermissions RevokePermissionsXAmzTargetEnum = "AWSLakeFormation.RevokePermissions"
)

type RevokePermissionsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RevokePermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RevokePermissionsRequest struct {
	Headers RevokePermissionsHeaders
	Request shared.RevokePermissionsRequest `request:"mediaType=application/json"`
}

type RevokePermissionsResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InvalidInputException           *interface{}
	RevokePermissionsResponse       map[string]interface{}
	StatusCode                      int64
}
