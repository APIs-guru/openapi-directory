package operations

import (
"openapi/pkg/models/shared")


type DescribeCodeRepositoryXAmzTargetEnum string

const (
    DescribeCodeRepositoryXAmzTargetEnumSageMakerDescribeCodeRepository DescribeCodeRepositoryXAmzTargetEnum = "SageMaker.DescribeCodeRepository"
)


type DescribeCodeRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCodeRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCodeRepositoryRequest struct {
    Headers DescribeCodeRepositoryHeaders 
    Request shared.DescribeCodeRepositoryInput `request:"mediaType=application/json"`
    
}

type DescribeCodeRepositoryResponse struct {
    ContentType string 
    DescribeCodeRepositoryOutput *shared.DescribeCodeRepositoryOutput 
    StatusCode int64 
    
}

