package operations



type PostUsersIDResendWelcomeEmailPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostUsersIDResendWelcomeEmailRequest struct {
    PathParams PostUsersIDResendWelcomeEmailPathParams 
    
}

type PostUsersIDResendWelcomeEmailResponse struct {
    ContentType string 
    StatusCode int64 
    
}

