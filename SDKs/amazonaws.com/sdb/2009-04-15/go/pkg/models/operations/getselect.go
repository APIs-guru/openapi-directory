package operations




type GetSelectActionEnum string

const (
    GetSelectActionEnumSelect GetSelectActionEnum = "Select"
)



type GetSelectVersionEnum string

const (
    GetSelectVersionEnumTwoThousandAndNine0415 GetSelectVersionEnum = "2009-04-15"
)


type GetSelectQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetSelectActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConsistentRead *bool `queryParam:"style=form,explode=true,name=ConsistentRead"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    SelectExpression string `queryParam:"style=form,explode=true,name=SelectExpression"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version GetSelectVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSelectRequest struct {
    QueryParams GetSelectQueryParams 
    
}

type GetSelectResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

