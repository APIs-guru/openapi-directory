package operations

import (
"openapi/pkg/models/shared")


type CreateDataSourceFromRdsxAmzTargetEnum string

const (
    CreateDataSourceFromRdsxAmzTargetEnumAmazonMl20141212CreateDataSourceFromRds CreateDataSourceFromRdsxAmzTargetEnum = "AmazonML_20141212.CreateDataSourceFromRDS"
)


type CreateDataSourceFromRdsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDataSourceFromRdsxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDataSourceFromRdsRequest struct {
    Headers CreateDataSourceFromRdsHeaders 
    Request shared.CreateDataSourceFromRdsInput `request:"mediaType=application/json"`
    
}

type CreateDataSourceFromRdsResponse struct {
    ContentType string 
    CreateDataSourceFromRdsOutput *shared.CreateDataSourceFromRdsOutput 
    IdempotentParameterMismatchException *interface{} 
    InternalServerException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

