package operations




type GetCreateDomainActionEnum string

const (
    GetCreateDomainActionEnumCreateDomain GetCreateDomainActionEnum = "CreateDomain"
)



type GetCreateDomainVersionEnum string

const (
    GetCreateDomainVersionEnumTwoThousandAndNine0415 GetCreateDomainVersionEnum = "2009-04-15"
)


type GetCreateDomainQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetCreateDomainActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version GetCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateDomainRequest struct {
    QueryParams GetCreateDomainQueryParams 
    
}

type GetCreateDomainResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

