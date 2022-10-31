package operations




type GetV1VerificationResultFormatEnum string

const (
    GetV1VerificationResultFormatEnumJSON GetV1VerificationResultFormatEnum = "json"
GetV1VerificationResultFormatEnumXML GetV1VerificationResultFormatEnum = "xml"
)


type GetV1VerificationResultQueryParams struct {
    Format *GetV1VerificationResultFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Key string `queryParam:"style=form,explode=true,name=key"`
    Otp string `queryParam:"style=form,explode=true,name=otp"`
    TranID string `queryParam:"style=form,explode=true,name=tran_id"`
    
}

type GetV1VerificationResultRequest struct {
    QueryParams GetV1VerificationResultQueryParams 
    
}

type GetV1VerificationResultResponse struct {
    ContentType string 
    GetV1VerificationResult200ApplicationJSONString *string 
    StatusCode int64 
    
}

