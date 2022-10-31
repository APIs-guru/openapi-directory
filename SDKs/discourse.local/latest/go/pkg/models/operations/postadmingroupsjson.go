package operations



type PostAdminGroupsJSONRequestBodyGroup struct {
    Name string `json:"name"`
    
}

type PostAdminGroupsJSONRequestBody struct {
    Group PostAdminGroupsJSONRequestBodyGroup `json:"group"`
    
}

type PostAdminGroupsJSONRequest struct {
    Request *PostAdminGroupsJSONRequestBody `request:"mediaType=application/json"`
    
}

type PostAdminGroupsJSON200ApplicationJSONBasicGroup struct {
    AllowMembershipRequests *bool `json:"allow_membership_requests,omitempty"`
    Automatic *bool `json:"automatic,omitempty"`
    AutomaticMembershipEmailDomains *string `json:"automatic_membership_email_domains,omitempty"`
    AutomaticMembershipRetroactive *bool `json:"automatic_membership_retroactive,omitempty"`
    BioCooked *string `json:"bio_cooked,omitempty"`
    BioExcerpt *string `json:"bio_excerpt,omitempty"`
    BioRaw *string `json:"bio_raw,omitempty"`
    CanSeeMembers *bool `json:"can_see_members,omitempty"`
    DefaultNotificationLevel *int64 `json:"default_notification_level,omitempty"`
    FlairBgColor *string `json:"flair_bg_color,omitempty"`
    FlairColor *string `json:"flair_color,omitempty"`
    FlairURL *string `json:"flair_url,omitempty"`
    FullName *string `json:"full_name,omitempty"`
    GrantTrustLevel *string `json:"grant_trust_level,omitempty"`
    HasMessages *bool `json:"has_messages,omitempty"`
    ID int64 `json:"id"`
    IncomingEmail *string `json:"incoming_email,omitempty"`
    MembershipRequestTemplate *string `json:"membership_request_template,omitempty"`
    MembershipVisibilityLevel *int64 `json:"membership_visibility_level,omitempty"`
    MentionableLevel *int64 `json:"mentionable_level,omitempty"`
    MessageableLevel *int64 `json:"messageable_level,omitempty"`
    Name *string `json:"name,omitempty"`
    PrimaryGroup *bool `json:"primary_group,omitempty"`
    PublicAdmission *bool `json:"public_admission,omitempty"`
    PublicExit *bool `json:"public_exit,omitempty"`
    PublishReadState *bool `json:"publish_read_state,omitempty"`
    Title *string `json:"title,omitempty"`
    UserCount *int64 `json:"user_count,omitempty"`
    VisibilityLevel *int64 `json:"visibility_level,omitempty"`
    
}

type PostAdminGroupsJSON200ApplicationJSON struct {
    BasicGroup PostAdminGroupsJSON200ApplicationJSONBasicGroup `json:"basic_group"`
    
}

type PostAdminGroupsJSONResponse struct {
    ContentType string 
    PostAdminGroupsJSON200ApplicationJSONObject *PostAdminGroupsJSON200ApplicationJSON 
    StatusCode int64 
    
}

