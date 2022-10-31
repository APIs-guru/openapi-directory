package operations



type PostInvitesJSONHeaders struct {
    APIKey string `header:"style=simple,explode=false,name=Api-Key"`
    APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
    
}

type PostInvitesJSONRequestBody struct {
    CustomMessage *string `json:"custom_message,omitempty"`
    Email *string `json:"email,omitempty"`
    ExpiresAt *string `json:"expires_at,omitempty"`
    GroupID *int64 `json:"group_id,omitempty"`
    GroupNames *string `json:"group_names,omitempty"`
    MaxRedemptionsAllowed *int64 `json:"max_redemptions_allowed,omitempty"`
    SkipEmail *bool `json:"skip_email,omitempty"`
    TopicID *int64 `json:"topic_id,omitempty"`
    
}

type PostInvitesJSONRequest struct {
    Headers PostInvitesJSONHeaders 
    Request *PostInvitesJSONRequestBody `request:"mediaType=application/json"`
    
}

type PostInvitesJSON200ApplicationJSON struct {
    CreatedAt *string `json:"created_at,omitempty"`
    CustomMessage *string `json:"custom_message,omitempty"`
    Email *string `json:"email,omitempty"`
    Emailed *bool `json:"emailed,omitempty"`
    Expired *bool `json:"expired,omitempty"`
    ExpiresAt *string `json:"expires_at,omitempty"`
    Groups []interface{} `json:"groups,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Link *string `json:"link,omitempty"`
    Topics []interface{} `json:"topics,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

type PostInvitesJSONResponse struct {
    ContentType string 
    PostInvitesJSON200ApplicationJSONObject *PostInvitesJSON200ApplicationJSON 
    StatusCode int64 
    
}

