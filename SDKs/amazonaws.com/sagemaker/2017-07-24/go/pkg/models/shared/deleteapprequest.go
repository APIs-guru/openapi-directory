package shared



type DeleteAppRequest struct {
    AppName string `json:"AppName"`
    AppType AppTypeEnum `json:"AppType"`
    DomainID string `json:"DomainId"`
    UserProfileName string `json:"UserProfileName"`
    
}

