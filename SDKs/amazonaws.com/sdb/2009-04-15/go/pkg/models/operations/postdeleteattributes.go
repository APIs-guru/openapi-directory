package operations




type PostDeleteAttributesActionEnum string

const (
    PostDeleteAttributesActionEnumDeleteAttributes PostDeleteAttributesActionEnum = "DeleteAttributes"
)



type PostDeleteAttributesVersionEnum string

const (
    PostDeleteAttributesVersionEnumTwoThousandAndNine0415 PostDeleteAttributesVersionEnum = "2009-04-15"
)


type PostDeleteAttributesQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action PostDeleteAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version PostDeleteAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteAttributesRequest struct {
    QueryParams PostDeleteAttributesQueryParams 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

