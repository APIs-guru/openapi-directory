package operations



type PatchOrganizationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchOrganizationRequestBodyAddress struct {
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    StreetAndNumber *string `json:"streetAndNumber,omitempty"`
    
}

type PatchOrganizationRequestBodyChannels struct {
    Slack map[string]interface{} `json:"slack,omitempty"`
    Telegram map[string]interface{} `json:"telegram,omitempty"`
    
}

type PatchOrganizationRequestBodyConfigurations struct {
    BasicAuthEnabled *bool `json:"basicAuthEnabled,omitempty"`
    BasicAuthPassword *bool `json:"basicAuthPassword,omitempty"`
    
}

type PatchOrganizationRequestBodyLinks struct {
    About *string `json:"about,omitempty"`
    Contact *string `json:"contact,omitempty"`
    Privacy *string `json:"privacy,omitempty"`
    Support *string `json:"support,omitempty"`
    
}

type PatchOrganizationRequestBodySupportChat struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type PatchOrganizationRequestBodySupport struct {
    BusinessHours *string `json:"business_hours,omitempty"`
    Chat *PatchOrganizationRequestBodySupportChat `json:"chat,omitempty"`
    ContactNumber *string `json:"contact_number,omitempty"`
    Email *string `json:"email,omitempty"`
    
}

type PatchOrganizationRequestBodySupportChat1 struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PatchOrganizationRequestBodyThemeColors struct {
    Primary *string `json:"primary,omitempty"`
    Secondary *string `json:"secondary,omitempty"`
    
}

type PatchOrganizationRequestBodyTheme struct {
    Colors *PatchOrganizationRequestBodyThemeColors `json:"colors,omitempty"`
    
}

type PatchOrganizationRequestBody struct {
    Active *bool `json:"active,omitempty"`
    Address *PatchOrganizationRequestBodyAddress `json:"address,omitempty"`
    Channels *PatchOrganizationRequestBodyChannels `json:"channels,omitempty"`
    Configurations *PatchOrganizationRequestBodyConfigurations `json:"configurations,omitempty"`
    Links *PatchOrganizationRequestBodyLinks `json:"links,omitempty"`
    Locations []interface{} `json:"locations,omitempty"`
    Logo *string `json:"logo,omitempty"`
    Name *string `json:"name,omitempty"`
    Otp *string `json:"otp,omitempty"`
    StripeConnectedAccountID *string `json:"stripe_connected_account_id,omitempty"`
    StripeCountry *string `json:"stripe_country,omitempty"`
    StripeCurrency *string `json:"stripe_currency,omitempty"`
    StripeReserveAmount *int64 `json:"stripe_reserve_amount,omitempty"`
    Support *PatchOrganizationRequestBodySupport `json:"support,omitempty"`
    SupportChat *PatchOrganizationRequestBodySupportChat1 `json:"supportChat,omitempty"`
    Theme *PatchOrganizationRequestBodyTheme `json:"theme,omitempty"`
    
}

type PatchOrganizationRequest struct {
    PathParams PatchOrganizationPathParams 
    Request PatchOrganizationRequestBody `request:"mediaType=application/json"`
    
}

type PatchOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

