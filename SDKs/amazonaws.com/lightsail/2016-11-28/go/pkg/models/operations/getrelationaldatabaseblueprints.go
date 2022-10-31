package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationalDatabaseBlueprintsXAmzTargetEnum string

const (
	GetRelationalDatabaseBlueprintsXAmzTargetEnumLightsail20161128GetRelationalDatabaseBlueprints GetRelationalDatabaseBlueprintsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseBlueprints"
)

type GetRelationalDatabaseBlueprintsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRelationalDatabaseBlueprintsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRelationalDatabaseBlueprintsRequest struct {
	Headers GetRelationalDatabaseBlueprintsHeaders
	Request shared.GetRelationalDatabaseBlueprintsRequest `request:"mediaType=application/json"`
}

type GetRelationalDatabaseBlueprintsResponse struct {
	AccessDeniedException                 *interface{}
	AccountSetupInProgressException       *interface{}
	ContentType                           string
	GetRelationalDatabaseBlueprintsResult *shared.GetRelationalDatabaseBlueprintsResult
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
