package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlueprintsXAmzTargetEnum string

const (
	GetBlueprintsXAmzTargetEnumLightsail20161128GetBlueprints GetBlueprintsXAmzTargetEnum = "Lightsail_20161128.GetBlueprints"
)

type GetBlueprintsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBlueprintsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetBlueprintsRequest struct {
	Headers GetBlueprintsHeaders
	Request shared.GetBlueprintsRequest `request:"mediaType=application/json"`
}

type GetBlueprintsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetBlueprintsResult             *shared.GetBlueprintsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
