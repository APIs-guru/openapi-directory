package operations

import (
"openapi/pkg/models/shared")

type DescribePatchBaselinesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribePatchBaselinesXAmzTargetEnum string

const (
    DescribePatchBaselinesXAmzTargetEnumAmazonSsmDescribePatchBaselines DescribePatchBaselinesXAmzTargetEnum = "AmazonSSM.DescribePatchBaselines"
)


type DescribePatchBaselinesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePatchBaselinesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePatchBaselinesRequest struct {
    QueryParams DescribePatchBaselinesQueryParams 
    Headers DescribePatchBaselinesHeaders 
    Request shared.DescribePatchBaselinesRequest `request:"mediaType=application/json"`
    
}

type DescribePatchBaselinesResponse struct {
    ContentType string 
    DescribePatchBaselinesResult *shared.DescribePatchBaselinesResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

