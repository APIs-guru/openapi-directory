package operations




type GetRemoveTagsFromResourceActionEnum string

const (
    GetRemoveTagsFromResourceActionEnumRemoveTagsFromResource GetRemoveTagsFromResourceActionEnum = "RemoveTagsFromResource"
)



type GetRemoveTagsFromResourceVersionEnum string

const (
    GetRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0110 GetRemoveTagsFromResourceVersionEnum = "2013-01-10"
)


type GetRemoveTagsFromResourceQueryParams struct {
    Action GetRemoveTagsFromResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ResourceName string `queryParam:"style=form,explode=true,name=ResourceName"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    Version GetRemoveTagsFromResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRemoveTagsFromResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRemoveTagsFromResourceRequest struct {
    QueryParams GetRemoveTagsFromResourceQueryParams 
    Headers GetRemoveTagsFromResourceHeaders 
    
}

type GetRemoveTagsFromResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

