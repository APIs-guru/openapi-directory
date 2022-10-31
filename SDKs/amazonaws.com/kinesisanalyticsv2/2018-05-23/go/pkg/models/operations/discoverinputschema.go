package operations

import (
"openapi/pkg/models/shared")


type DiscoverInputSchemaXAmzTargetEnum string

const (
    DiscoverInputSchemaXAmzTargetEnumKinesisAnalytics20180523DiscoverInputSchema DiscoverInputSchemaXAmzTargetEnum = "KinesisAnalytics_20180523.DiscoverInputSchema"
)


type DiscoverInputSchemaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DiscoverInputSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DiscoverInputSchemaRequest struct {
    Headers DiscoverInputSchemaHeaders 
    Request shared.DiscoverInputSchemaRequest `request:"mediaType=application/json"`
    
}

type DiscoverInputSchemaResponse struct {
    ContentType string 
    DiscoverInputSchemaResponse *shared.DiscoverInputSchemaResponse 
    InvalidArgumentException *interface{} 
    InvalidRequestException *interface{} 
    ResourceProvisionedThroughputExceededException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnableToDetectSchemaException *interface{} 
    
}

