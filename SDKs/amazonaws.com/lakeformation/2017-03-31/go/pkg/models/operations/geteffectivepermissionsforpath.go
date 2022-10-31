package operations

import (
	"openapi/pkg/models/shared"
)

type GetEffectivePermissionsForPathQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetEffectivePermissionsForPathXAmzTargetEnum string

const (
	GetEffectivePermissionsForPathXAmzTargetEnumAwsLakeFormationGetEffectivePermissionsForPath GetEffectivePermissionsForPathXAmzTargetEnum = "AWSLakeFormation.GetEffectivePermissionsForPath"
)

type GetEffectivePermissionsForPathHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEffectivePermissionsForPathXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetEffectivePermissionsForPathRequest struct {
	QueryParams GetEffectivePermissionsForPathQueryParams
	Headers     GetEffectivePermissionsForPathHeaders
	Request     shared.GetEffectivePermissionsForPathRequest `request:"mediaType=application/json"`
}

type GetEffectivePermissionsForPathResponse struct {
	ContentType                            string
	EntityNotFoundException                *interface{}
	GetEffectivePermissionsForPathResponse *shared.GetEffectivePermissionsForPathResponse
	InternalServiceException               *interface{}
	InvalidInputException                  *interface{}
	OperationTimeoutException              *interface{}
	StatusCode                             int64
}
