package operations

import (
"openapi/pkg/models/shared")

type ListModelPackagesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListModelPackagesXAmzTargetEnum string

const (
    ListModelPackagesXAmzTargetEnumSageMakerListModelPackages ListModelPackagesXAmzTargetEnum = "SageMaker.ListModelPackages"
)


type ListModelPackagesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListModelPackagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListModelPackagesRequest struct {
    QueryParams ListModelPackagesQueryParams 
    Headers ListModelPackagesHeaders 
    Request shared.ListModelPackagesInput `request:"mediaType=application/json"`
    
}

type ListModelPackagesResponse struct {
    ContentType string 
    ListModelPackagesOutput *shared.ListModelPackagesOutput 
    StatusCode int64 
    
}

