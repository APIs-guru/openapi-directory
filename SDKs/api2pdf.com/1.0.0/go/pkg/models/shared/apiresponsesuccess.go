package shared

type APIResponseSuccess struct {
	Cost    *float64 `json:"cost"`
	MbIn    *float64 `json:"mbIn"`
	MbOut   *float64 `json:"mbOut"`
	Pdf     *string  `json:"pdf"`
	Success *bool    `json:"success"`
}
