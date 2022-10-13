package shared

type DNSRecordEntity struct {
	Domain *string `json:"domain"`
	ID     *string `json:"id"`
	Rrtype *string `json:"rrtype"`
	Value  *string `json:"value"`
}
