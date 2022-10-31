package operations



type Destiny2GetPublicVendorsQueryParams struct {
    Components []int32 `queryParam:"style=form,explode=false,name=components"`
    
}

type Destiny2GetPublicVendorsRequest struct {
    QueryParams Destiny2GetPublicVendorsQueryParams 
    
}

type Destiny2GetPublicVendorsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

