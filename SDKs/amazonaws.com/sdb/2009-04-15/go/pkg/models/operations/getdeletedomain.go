package operations




type GetDeleteDomainActionEnum string

const (
    GetDeleteDomainActionEnumDeleteDomain GetDeleteDomainActionEnum = "DeleteDomain"
)



type GetDeleteDomainVersionEnum string

const (
    GetDeleteDomainVersionEnumTwoThousandAndNine0415 GetDeleteDomainVersionEnum = "2009-04-15"
)


type GetDeleteDomainQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetDeleteDomainActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version GetDeleteDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteDomainRequest struct {
    QueryParams GetDeleteDomainQueryParams 
    
}

type GetDeleteDomainResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

