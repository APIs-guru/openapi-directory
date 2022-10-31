package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeArtifactXAmzTargetEnum string

const (
	DescribeArtifactXAmzTargetEnumSageMakerDescribeArtifact DescribeArtifactXAmzTargetEnum = "SageMaker.DescribeArtifact"
)

type DescribeArtifactHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeArtifactRequest struct {
	Headers DescribeArtifactHeaders
	Request shared.DescribeArtifactRequest `request:"mediaType=application/json"`
}

type DescribeArtifactResponse struct {
	ContentType              string
	DescribeArtifactResponse *shared.DescribeArtifactResponse
	ResourceNotFound         *interface{}
	StatusCode               int64
}
