package operations



type UserGetCredentialTypesForTargetAccountPathParams struct {
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    
}

type UserGetCredentialTypesForTargetAccountRequest struct {
    PathParams UserGetCredentialTypesForTargetAccountPathParams 
    
}

type UserGetCredentialTypesForTargetAccountResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

