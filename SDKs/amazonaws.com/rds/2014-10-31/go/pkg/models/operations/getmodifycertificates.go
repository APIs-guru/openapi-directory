package operations




type GetModifyCertificatesActionEnum string

const (
    GetModifyCertificatesActionEnumModifyCertificates GetModifyCertificatesActionEnum = "ModifyCertificates"
)



type GetModifyCertificatesVersionEnum string

const (
    GetModifyCertificatesVersionEnumTwoThousandAndFourteen1031 GetModifyCertificatesVersionEnum = "2014-10-31"
)


type GetModifyCertificatesQueryParams struct {
    Action GetModifyCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CertificateIdentifier *string `queryParam:"style=form,explode=true,name=CertificateIdentifier"`
    RemoveCustomerOverride *bool `queryParam:"style=form,explode=true,name=RemoveCustomerOverride"`
    Version GetModifyCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyCertificatesRequest struct {
    QueryParams GetModifyCertificatesQueryParams 
    Headers GetModifyCertificatesHeaders 
    
}

type GetModifyCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

