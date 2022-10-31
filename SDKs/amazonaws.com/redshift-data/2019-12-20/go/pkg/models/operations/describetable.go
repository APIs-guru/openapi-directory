package operations

import (
"openapi/pkg/models/shared")

type DescribeTableQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeTableXAmzTargetEnum string

const (
    DescribeTableXAmzTargetEnumRedshiftDataDescribeTable DescribeTableXAmzTargetEnum = "RedshiftData.DescribeTable"
)


type DescribeTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTableRequest struct {
    QueryParams DescribeTableQueryParams 
    Headers DescribeTableHeaders 
    Request shared.DescribeTableRequest `request:"mediaType=application/json"`
    
}

type DescribeTableResponse struct {
    ContentType string 
    DescribeTableResponse *shared.DescribeTableResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

