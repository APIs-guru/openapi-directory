package operations



type PullDocHeaders struct {
    ContentType *string `header:"style=simple,explode=false,name=Content-Type"`
    XDigilockerHmac *string `header:"style=simple,explode=false,name=x-digilocker-hmac"`
    
}

type PullDocRequest struct {
    Headers PullDocHeaders 
    Request []byte `request:"mediaType=application/xml"`
    
}

type PullDocResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

