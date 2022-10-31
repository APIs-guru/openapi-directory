package operations




type GetUntagResourceActionEnum string

const (
    GetUntagResourceActionEnumUntagResource GetUntagResourceActionEnum = "UntagResource"
)



type GetUntagResourceVersionEnum string

const (
    GetUntagResourceVersionEnumTwoThousandAndTen0801 GetUntagResourceVersionEnum = "2010-08-01"
)


type GetUntagResourceQueryParams struct {
    Action GetUntagResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ResourceArn string `queryParam:"style=form,explode=true,name=ResourceARN"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    Version GetUntagResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUntagResourceRequest struct {
    QueryParams GetUntagResourceQueryParams 
    Headers GetUntagResourceHeaders 
    
}

type GetUntagResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

