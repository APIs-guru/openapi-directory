package operations




type PostAddTagsToResourceActionEnum string

const (
    PostAddTagsToResourceActionEnumAddTagsToResource PostAddTagsToResourceActionEnum = "AddTagsToResource"
)



type PostAddTagsToResourceVersionEnum string

const (
    PostAddTagsToResourceVersionEnumTwoThousandAndThirteen0110 PostAddTagsToResourceVersionEnum = "2013-01-10"
)


type PostAddTagsToResourceQueryParams struct {
    Action PostAddTagsToResourceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAddTagsToResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAddTagsToResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAddTagsToResourceRequest struct {
    QueryParams PostAddTagsToResourceQueryParams 
    Headers PostAddTagsToResourceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAddTagsToResourceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

