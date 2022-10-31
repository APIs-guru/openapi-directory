package operations




type PostModifyCertificatesActionEnum string

const (
    PostModifyCertificatesActionEnumModifyCertificates PostModifyCertificatesActionEnum = "ModifyCertificates"
)



type PostModifyCertificatesVersionEnum string

const (
    PostModifyCertificatesVersionEnumTwoThousandAndFourteen1031 PostModifyCertificatesVersionEnum = "2014-10-31"
)


type PostModifyCertificatesQueryParams struct {
    Action PostModifyCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyCertificatesRequest struct {
    QueryParams PostModifyCertificatesQueryParams 
    Headers PostModifyCertificatesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

