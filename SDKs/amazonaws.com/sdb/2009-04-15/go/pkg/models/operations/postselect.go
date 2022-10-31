package operations




type PostSelectActionEnum string

const (
    PostSelectActionEnumSelect PostSelectActionEnum = "Select"
)



type PostSelectVersionEnum string

const (
    PostSelectVersionEnumTwoThousandAndNine0415 PostSelectVersionEnum = "2009-04-15"
)


type PostSelectQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action PostSelectActionEnum `queryParam:"style=form,explode=true,name=Action"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version PostSelectVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSelectRequest struct {
    QueryParams PostSelectQueryParams 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSelectResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

