package operations

import (
"openapi/pkg/models/shared")


type DescribeDrtAccessXAmzTargetEnum string

const (
    DescribeDrtAccessXAmzTargetEnumAwsShield20160616DescribeDrtAccess DescribeDrtAccessXAmzTargetEnum = "AWSShield_20160616.DescribeDRTAccess"
)


type DescribeDrtAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDrtAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDrtAccessRequest struct {
    Headers DescribeDrtAccessHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DescribeDrtAccessResponse struct {
    ContentType string 
    DescribeDrtAccessResponse *shared.DescribeDrtAccessResponse 
    InternalErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

