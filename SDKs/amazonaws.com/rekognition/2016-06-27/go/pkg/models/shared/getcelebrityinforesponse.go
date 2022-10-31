package shared



type GetCelebrityInfoResponse struct {
    KnownGender *KnownGender `json:"KnownGender,omitempty"`
    Name *string `json:"Name,omitempty"`
    Urls []string `json:"Urls,omitempty"`
    
}

