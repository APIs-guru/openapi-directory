package shared



type RateLimit struct {
    APIContext *string `json:"apiContext,omitempty"`
    APIName *string `json:"apiName,omitempty"`
    APIVersion *string `json:"apiVersion,omitempty"`
    Resources []Resource `json:"resources,omitempty"`
    
}

