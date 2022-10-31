package operations




type GetDescribeHsmClientCertificatesActionEnum string

const (
    GetDescribeHsmClientCertificatesActionEnumDescribeHsmClientCertificates GetDescribeHsmClientCertificatesActionEnum = "DescribeHsmClientCertificates"
)



type GetDescribeHsmClientCertificatesVersionEnum string

const (
    GetDescribeHsmClientCertificatesVersionEnumTwoThousandAndTwelve1201 GetDescribeHsmClientCertificatesVersionEnum = "2012-12-01"
)


type GetDescribeHsmClientCertificatesQueryParams struct {
    Action GetDescribeHsmClientCertificatesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    HsmClientCertificateIdentifier *string `queryParam:"style=form,explode=true,name=HsmClientCertificateIdentifier"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    TagValues []string `queryParam:"style=form,explode=true,name=TagValues"`
    Version GetDescribeHsmClientCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeHsmClientCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeHsmClientCertificatesRequest struct {
    QueryParams GetDescribeHsmClientCertificatesQueryParams 
    Headers GetDescribeHsmClientCertificatesHeaders 
    
}

type GetDescribeHsmClientCertificatesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

