package operations




type PostCreateHsmClientCertificateActionEnum string

const (
    PostCreateHsmClientCertificateActionEnumCreateHsmClientCertificate PostCreateHsmClientCertificateActionEnum = "CreateHsmClientCertificate"
)



type PostCreateHsmClientCertificateVersionEnum string

const (
    PostCreateHsmClientCertificateVersionEnumTwoThousandAndTwelve1201 PostCreateHsmClientCertificateVersionEnum = "2012-12-01"
)


type PostCreateHsmClientCertificateQueryParams struct {
    Action PostCreateHsmClientCertificateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateHsmClientCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateHsmClientCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateHsmClientCertificateRequest struct {
    QueryParams PostCreateHsmClientCertificateQueryParams 
    Headers PostCreateHsmClientCertificateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateHsmClientCertificateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

