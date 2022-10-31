package operations




type PostDeleteOptionGroupActionEnum string

const (
    PostDeleteOptionGroupActionEnumDeleteOptionGroup PostDeleteOptionGroupActionEnum = "DeleteOptionGroup"
)



type PostDeleteOptionGroupVersionEnum string

const (
    PostDeleteOptionGroupVersionEnumTwoThousandAndThirteen0110 PostDeleteOptionGroupVersionEnum = "2013-01-10"
)


type PostDeleteOptionGroupQueryParams struct {
    Action PostDeleteOptionGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteOptionGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteOptionGroupRequest struct {
    QueryParams PostDeleteOptionGroupQueryParams 
    Headers PostDeleteOptionGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteOptionGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

