package operations



type DeleteSSHKeyPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    Fingerprint string `pathParam:"style=simple,explode=false,name=fingerprint"`
    
}

type DeleteSSHKeyQueryParams struct {
    DomainName string `queryParam:"style=form,explode=true,name=domain_name"`
    
}

type DeleteSSHKeyRequest struct {
    PathParams DeleteSSHKeyPathParams 
    QueryParams DeleteSSHKeyQueryParams 
    
}

type DeleteSSHKeyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

