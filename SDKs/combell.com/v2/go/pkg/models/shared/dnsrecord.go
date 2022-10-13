package shared

type DNSRecord struct {
	Content    *string `json:"content"`
	ID         *string `json:"id"`
	Port       *int32  `json:"port"`
	Priority   *int32  `json:"priority"`
	Protocol   *string `json:"protocol"`
	RecordName *string `json:"record_name"`
	Service    *string `json:"service"`
	Target     *string `json:"target"`
	TTL        *int32  `json:"ttl"`
	Type       *string `json:"type"`
	Weight     *int32  `json:"weight"`
}
