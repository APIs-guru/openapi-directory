package shared



type DNSRecord struct {
    TTL int64 `json:"TTL"`
    Type RecordTypeEnum `json:"Type"`
    
}

