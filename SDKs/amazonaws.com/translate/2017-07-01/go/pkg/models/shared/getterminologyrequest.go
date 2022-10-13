package shared

type GetTerminologyRequest struct {
	Name                  string                    `json:"Name"`
	TerminologyDataFormat TerminologyDataFormatEnum `json:"TerminologyDataFormat"`
}
