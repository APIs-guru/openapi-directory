package shared

type APIResponseSuccess struct {
	Cost    *float64 `json:"cost,omitempty"`
	MbIn    *float64 `json:"mbIn,omitempty"`
	MbOut   *float64 `json:"mbOut,omitempty"`
	Pdf     *string  `json:"pdf,omitempty"`
	Success *bool    `json:"success,omitempty"`
}
