package shared

type GetTerminologyResponse struct {
	TerminologyDataLocation *TerminologyDataLocation `json:"TerminologyDataLocation,omitempty"`
	TerminologyProperties   *TerminologyProperties   `json:"TerminologyProperties,omitempty"`
}
