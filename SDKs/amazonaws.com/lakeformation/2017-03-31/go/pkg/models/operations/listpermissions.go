package operations

import (
	"openapi/pkg/models/shared"
)

type ListPermissionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPermissionsXAmzTargetEnum string

const (
	ListPermissionsXAmzTargetEnumAwsLakeFormationListPermissions ListPermissionsXAmzTargetEnum = "AWSLakeFormation.ListPermissions"
)

type ListPermissionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPermissionsRequest struct {
	QueryParams ListPermissionsQueryParams
	Headers     ListPermissionsHeaders
	Request     shared.ListPermissionsRequest `request:"mediaType=application/json"`
}

type ListPermissionsResponse struct {
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListPermissionsResponse   *shared.ListPermissionsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
