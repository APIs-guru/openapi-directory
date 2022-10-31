package operations




type PostPutAttributesActionEnum string

const (
    PostPutAttributesActionEnumPutAttributes PostPutAttributesActionEnum = "PutAttributes"
)



type PostPutAttributesVersionEnum string

const (
    PostPutAttributesVersionEnumTwoThousandAndNine0415 PostPutAttributesVersionEnum = "2009-04-15"
)


type PostPutAttributesQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action PostPutAttributesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version PostPutAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPutAttributesRequest struct {
    QueryParams PostPutAttributesQueryParams 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPutAttributesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

