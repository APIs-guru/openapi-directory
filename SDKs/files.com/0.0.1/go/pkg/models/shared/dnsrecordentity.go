package shared



type DNSRecordEntity struct {
    Domain *string `json:"domain,omitempty"`
    ID *string `json:"id,omitempty"`
    Rrtype *string `json:"rrtype,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

