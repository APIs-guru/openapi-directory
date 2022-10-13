package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDrtAccessXAmzTargetEnum string

const (
	DescribeDrtAccessXAmzTargetEnumAwsShield20160616DescribeDrtAccess DescribeDrtAccessXAmzTargetEnum = "AWSShield_20160616.DescribeDRTAccess"
)

type DescribeDrtAccessHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDrtAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDrtAccessRequest struct {
	Headers DescribeDrtAccessHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeDrtAccessResponse struct {
	ContentType               string
	DescribeDrtAccessResponse *shared.DescribeDrtAccessResponse
	InternalErrorException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
