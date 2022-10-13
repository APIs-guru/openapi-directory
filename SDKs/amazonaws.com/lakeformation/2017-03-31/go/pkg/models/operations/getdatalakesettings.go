package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataLakeSettingsXAmzTargetEnum string

const (
	GetDataLakeSettingsXAmzTargetEnumAwsLakeFormationGetDataLakeSettings GetDataLakeSettingsXAmzTargetEnum = "AWSLakeFormation.GetDataLakeSettings"
)

type GetDataLakeSettingsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDataLakeSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDataLakeSettingsRequest struct {
	Headers GetDataLakeSettingsHeaders
	Request shared.GetDataLakeSettingsRequest `request:"mediaType=application/json"`
}

type GetDataLakeSettingsResponse struct {
	ContentType                 string
	EntityNotFoundException     *interface{}
	GetDataLakeSettingsResponse *shared.GetDataLakeSettingsResponse
	InternalServiceException    *interface{}
	InvalidInputException       *interface{}
	StatusCode                  int64
}
