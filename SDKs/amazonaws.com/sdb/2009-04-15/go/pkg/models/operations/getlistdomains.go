package operations




type GetListDomainsActionEnum string

const (
    GetListDomainsActionEnumListDomains GetListDomainsActionEnum = "ListDomains"
)



type GetListDomainsVersionEnum string

const (
    GetListDomainsVersionEnumTwoThousandAndNine0415 GetListDomainsVersionEnum = "2009-04-15"
)


type GetListDomainsQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetListDomainsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxNumberOfDomains *int64 `queryParam:"style=form,explode=true,name=MaxNumberOfDomains"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version GetListDomainsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListDomainsRequest struct {
    QueryParams GetListDomainsQueryParams 
    
}

type GetListDomainsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

