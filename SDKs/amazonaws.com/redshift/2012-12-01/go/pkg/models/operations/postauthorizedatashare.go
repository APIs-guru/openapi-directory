package operations




type PostAuthorizeDataShareActionEnum string

const (
    PostAuthorizeDataShareActionEnumAuthorizeDataShare PostAuthorizeDataShareActionEnum = "AuthorizeDataShare"
)



type PostAuthorizeDataShareVersionEnum string

const (
    PostAuthorizeDataShareVersionEnumTwoThousandAndTwelve1201 PostAuthorizeDataShareVersionEnum = "2012-12-01"
)


type PostAuthorizeDataShareQueryParams struct {
    Action PostAuthorizeDataShareActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAuthorizeDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAuthorizeDataShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAuthorizeDataShareRequest struct {
    QueryParams PostAuthorizeDataShareQueryParams 
    Headers PostAuthorizeDataShareHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAuthorizeDataShareResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

