package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationReferenceDataSourceXAmzTargetEnum string

const (
	AddApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20180523AddApplicationReferenceDataSource AddApplicationReferenceDataSourceXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationReferenceDataSource"
)

type AddApplicationReferenceDataSourceHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationReferenceDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddApplicationReferenceDataSourceRequest struct {
	Headers AddApplicationReferenceDataSourceHeaders
	Request shared.AddApplicationReferenceDataSourceRequest `request:"mediaType=application/json"`
}

type AddApplicationReferenceDataSourceResponse struct {
	AddApplicationReferenceDataSourceResponse *shared.AddApplicationReferenceDataSourceResponse
	ConcurrentModificationException           *interface{}
	ContentType                               string
	InvalidArgumentException                  *interface{}
	InvalidRequestException                   *interface{}
	ResourceInUseException                    *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
}
