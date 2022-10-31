package operations




type PostModifyDbProxyActionEnum string

const (
    PostModifyDbProxyActionEnumModifyDbProxy PostModifyDbProxyActionEnum = "ModifyDBProxy"
)



type PostModifyDbProxyVersionEnum string

const (
    PostModifyDbProxyVersionEnumTwoThousandAndFourteen1031 PostModifyDbProxyVersionEnum = "2014-10-31"
)


type PostModifyDbProxyQueryParams struct {
    Action PostModifyDbProxyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyDbProxyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyDbProxyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyDbProxyRequest struct {
    QueryParams PostModifyDbProxyQueryParams 
    Headers PostModifyDbProxyHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyDbProxyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

