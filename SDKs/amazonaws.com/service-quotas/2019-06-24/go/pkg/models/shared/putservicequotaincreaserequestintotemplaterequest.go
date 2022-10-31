package shared



type PutServiceQuotaIncreaseRequestIntoTemplateRequest struct {
    AwsRegion string `json:"AwsRegion"`
    DesiredValue float64 `json:"DesiredValue"`
    QuotaCode string `json:"QuotaCode"`
    ServiceCode string `json:"ServiceCode"`
    
}

