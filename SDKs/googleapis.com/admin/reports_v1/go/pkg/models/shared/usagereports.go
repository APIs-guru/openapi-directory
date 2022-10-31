package shared



type UsageReportsWarningsData struct {
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UsageReportsWarnings struct {
    Code *string `json:"code,omitempty"`
    Data []UsageReportsWarningsData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type UsageReports struct {
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UsageReports []UsageReport `json:"usageReports,omitempty"`
    Warnings []UsageReportsWarnings `json:"warnings,omitempty"`
    
}

