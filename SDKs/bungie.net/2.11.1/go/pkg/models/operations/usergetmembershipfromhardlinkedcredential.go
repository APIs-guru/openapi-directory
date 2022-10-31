package operations



type UserGetMembershipFromHardLinkedCredentialPathParams struct {
    CrType int64 `pathParam:"style=simple,explode=false,name=crType"`
    Credential string `pathParam:"style=simple,explode=false,name=credential"`
    
}

type UserGetMembershipFromHardLinkedCredentialRequest struct {
    PathParams UserGetMembershipFromHardLinkedCredentialPathParams 
    
}

type UserGetMembershipFromHardLinkedCredentialResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

