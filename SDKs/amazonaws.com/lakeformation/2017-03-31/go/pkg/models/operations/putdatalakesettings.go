package operations

import (
	"openapi/pkg/models/shared"
)

type PutDataLakeSettingsXAmzTargetEnum string

const (
	PutDataLakeSettingsXAmzTargetEnumAwsLakeFormationPutDataLakeSettings PutDataLakeSettingsXAmzTargetEnum = "AWSLakeFormation.PutDataLakeSettings"
)

type PutDataLakeSettingsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDataLakeSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutDataLakeSettingsRequest struct {
	Headers PutDataLakeSettingsHeaders
	Request shared.PutDataLakeSettingsRequest `request:"mediaType=application/json"`
}

type PutDataLakeSettingsResponse struct {
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidInputException       *interface{}
	PutDataLakeSettingsResponse map[string]interface{}
	StatusCode                  int64
}
