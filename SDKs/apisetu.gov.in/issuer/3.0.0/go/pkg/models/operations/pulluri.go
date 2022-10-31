package operations



type PullURIHeaders struct {
    ContentType *string `header:"style=simple,explode=false,name=Content-Type"`
    XDigilockerHmac *string `header:"style=simple,explode=false,name=x-digilocker-hmac"`
    
}

type PullURIRequest struct {
    Headers PullURIHeaders 
    Request []byte `request:"mediaType=application/xml"`
    
}

type PullURIResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

