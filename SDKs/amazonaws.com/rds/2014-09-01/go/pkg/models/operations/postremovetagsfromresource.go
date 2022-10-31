package operations




type PostRemoveTagsFromResourceActionEnum string

const (
    PostRemoveTagsFromResourceActionEnumRemoveTagsFromResource PostRemoveTagsFromResourceActionEnum = "RemoveTagsFromResource"
)



type PostRemoveTagsFromResourceVersionEnum string

const (
    PostRemoveTagsFromResourceVersionEnumTwoThousandAndFourteen0901 PostRemoveTagsFromResourceVersionEnum = "2014-09-01"
)


type PostRemoveTagsFromResourceQueryParams struct {
    Action PostRemoveTagsFromResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRemoveTagsFromResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRemoveTagsFromResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRemoveTagsFromResourceRequest struct {
    QueryParams PostRemoveTagsFromResourceQueryParams 
    Headers PostRemoveTagsFromResourceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRemoveTagsFromResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

