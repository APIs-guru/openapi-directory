package shared

type GetTerminologyResponse struct {
	TerminologyDataLocation *TerminologyDataLocation `json:"TerminologyDataLocation"`
	TerminologyProperties   *TerminologyProperties   `json:"TerminologyProperties"`
}
