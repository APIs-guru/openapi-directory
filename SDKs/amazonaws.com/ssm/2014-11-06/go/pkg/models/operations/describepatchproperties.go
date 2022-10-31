package operations

import (
"openapi/pkg/models/shared")

type DescribePatchPropertiesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribePatchPropertiesXAmzTargetEnum string

const (
    DescribePatchPropertiesXAmzTargetEnumAmazonSsmDescribePatchProperties DescribePatchPropertiesXAmzTargetEnum = "AmazonSSM.DescribePatchProperties"
)


type DescribePatchPropertiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePatchPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePatchPropertiesRequest struct {
    QueryParams DescribePatchPropertiesQueryParams 
    Headers DescribePatchPropertiesHeaders 
    Request shared.DescribePatchPropertiesRequest `request:"mediaType=application/json"`
    
}

type DescribePatchPropertiesResponse struct {
    ContentType string 
    DescribePatchPropertiesResult *shared.DescribePatchPropertiesResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

