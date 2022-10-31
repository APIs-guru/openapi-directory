package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSizeConstraintSetXAmzTargetEnum string

const (
	CreateSizeConstraintSetXAmzTargetEnumAwswaf20150824CreateSizeConstraintSet CreateSizeConstraintSetXAmzTargetEnum = "AWSWAF_20150824.CreateSizeConstraintSet"
)

type CreateSizeConstraintSetHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSizeConstraintSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateSizeConstraintSetRequest struct {
	Headers CreateSizeConstraintSetHeaders
	Request shared.CreateSizeConstraintSetRequest `request:"mediaType=application/json"`
}

type CreateSizeConstraintSetResponse struct {
	ContentType                     string
	CreateSizeConstraintSetResponse *shared.CreateSizeConstraintSetResponse
	StatusCode                      int64
	WafDisallowedNameException      *interface{}
	WafInternalErrorException       *interface{}
	WafInvalidAccountException      *interface{}
	WafInvalidParameterException    *interface{}
	WafLimitsExceededException      *interface{}
	WafStaleDataException           *interface{}
}
