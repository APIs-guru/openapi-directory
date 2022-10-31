package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSeverityLevelsXAmzTargetEnum string

const (
	DescribeSeverityLevelsXAmzTargetEnumAwsSupport20130415DescribeSeverityLevels DescribeSeverityLevelsXAmzTargetEnum = "AWSSupport_20130415.DescribeSeverityLevels"
)

type DescribeSeverityLevelsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSeverityLevelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeSeverityLevelsRequest struct {
	Headers DescribeSeverityLevelsHeaders
	Request shared.DescribeSeverityLevelsRequest `request:"mediaType=application/json"`
}

type DescribeSeverityLevelsResponse struct {
	ContentType                    string
	DescribeSeverityLevelsResponse *shared.DescribeSeverityLevelsResponse
	InternalServerError            *interface{}
	StatusCode                     int64
}
