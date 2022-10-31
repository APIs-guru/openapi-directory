package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEmergencyContactSettingsXAmzTargetEnum string

const (
	DescribeEmergencyContactSettingsXAmzTargetEnumAwsShield20160616DescribeEmergencyContactSettings DescribeEmergencyContactSettingsXAmzTargetEnum = "AWSShield_20160616.DescribeEmergencyContactSettings"
)

type DescribeEmergencyContactSettingsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEmergencyContactSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEmergencyContactSettingsRequest struct {
	Headers DescribeEmergencyContactSettingsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeEmergencyContactSettingsResponse struct {
	ContentType                              string
	DescribeEmergencyContactSettingsResponse *shared.DescribeEmergencyContactSettingsResponse
	InternalErrorException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
