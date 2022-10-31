package operations

import (
"openapi/pkg/models/shared")


type DescribeDatabaseXAmzTargetEnum string

const (
    DescribeDatabaseXAmzTargetEnumTimestream20181101DescribeDatabase DescribeDatabaseXAmzTargetEnum = "Timestream_20181101.DescribeDatabase"
)


type DescribeDatabaseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDatabaseRequest struct {
    Headers DescribeDatabaseHeaders 
    Request shared.DescribeDatabaseRequest `request:"mediaType=application/json"`
    
}

type DescribeDatabaseResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeDatabaseResponse *shared.DescribeDatabaseResponse 
    InternalServerException *interface{} 
    InvalidEndpointException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

