package shared

type DNSRecord struct {
	Content    *string `json:"content,omitempty"`
	ID         *string `json:"id,omitempty"`
	Port       *int32  `json:"port,omitempty"`
	Priority   *int32  `json:"priority,omitempty"`
	Protocol   *string `json:"protocol,omitempty"`
	RecordName *string `json:"record_name,omitempty"`
	Service    *string `json:"service,omitempty"`
	Target     *string `json:"target,omitempty"`
	TTL        *int32  `json:"ttl,omitempty"`
	Type       *string `json:"type,omitempty"`
	Weight     *int32  `json:"weight,omitempty"`
}
