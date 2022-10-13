package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationReferenceDataSourceXAmzTargetEnum string

const (
	DeleteApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationReferenceDataSource DeleteApplicationReferenceDataSourceXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource"
)

type DeleteApplicationReferenceDataSourceHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationReferenceDataSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationReferenceDataSourceRequest struct {
	Headers DeleteApplicationReferenceDataSourceHeaders
	Request shared.DeleteApplicationReferenceDataSourceRequest `request:"mediaType=application/json"`
}

type DeleteApplicationReferenceDataSourceResponse struct {
	ConcurrentModificationException              *interface{}
	ContentType                                  string
	DeleteApplicationReferenceDataSourceResponse *shared.DeleteApplicationReferenceDataSourceResponse
	InvalidArgumentException                     *interface{}
	InvalidRequestException                      *interface{}
	ResourceInUseException                       *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
}
