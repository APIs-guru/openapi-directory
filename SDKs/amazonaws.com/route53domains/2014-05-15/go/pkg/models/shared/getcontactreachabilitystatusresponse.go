package shared



type GetContactReachabilityStatusResponse struct {
    DomainName *string `json:"domainName,omitempty"`
    Status *ReachabilityStatusEnum `json:"status,omitempty"`
    
}

