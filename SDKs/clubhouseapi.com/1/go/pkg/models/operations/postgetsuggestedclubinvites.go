package operations



type PostGetSuggestedClubInvitesRequest struct {
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostGetSuggestedClubInvitesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

