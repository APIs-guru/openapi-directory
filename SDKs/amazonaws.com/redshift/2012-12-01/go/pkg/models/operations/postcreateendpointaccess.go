package operations




type PostCreateEndpointAccessActionEnum string

const (
    PostCreateEndpointAccessActionEnumCreateEndpointAccess PostCreateEndpointAccessActionEnum = "CreateEndpointAccess"
)



type PostCreateEndpointAccessVersionEnum string

const (
    PostCreateEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostCreateEndpointAccessVersionEnum = "2012-12-01"
)


type PostCreateEndpointAccessQueryParams struct {
    Action PostCreateEndpointAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateEndpointAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateEndpointAccessRequest struct {
    QueryParams PostCreateEndpointAccessQueryParams 
    Headers PostCreateEndpointAccessHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateEndpointAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

