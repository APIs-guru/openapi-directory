package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseMetricDataXAmzTargetEnum string

const (
	GetRelationalDatabaseMetricDataXAmzTargetEnumLightsail20161128GetRelationalDatabaseMetricData GetRelationalDatabaseMetricDataXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseMetricData"
)

type GetRelationalDatabaseMetricDataHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseMetricDataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRelationalDatabaseMetricDataRequest struct {
	Headers GetRelationalDatabaseMetricDataHeaders
	Request shared.GetRelationalDatabaseMetricDataRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseMetricDataResponse struct {
	AccessDeniedException                 *interface{}
	AccountSetupInProgressException       *interface{}
	ContentType                           string
	GetRelationalDatabaseMetricDataResult *shared.GetRelationalDatabaseMetricDataResult
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
