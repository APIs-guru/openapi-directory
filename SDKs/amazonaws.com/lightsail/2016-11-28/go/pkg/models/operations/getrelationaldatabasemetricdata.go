package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseMetricDataXAmzTargetEnum string

const (
	GetRelationalDatabaseMetricDataXAmzTargetEnumLightsail20161128GetRelationalDatabaseMetricData GetRelationalDatabaseMetricDataXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseMetricData"
)

type GetRelationalDatabaseMetricDataHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseMetricDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
