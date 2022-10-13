package shared

type Country struct {
	IsoAlpha2 *string `json:"iso_alpha_2"`
	IsoAlpha3 *string `json:"iso_alpha_3"`
	Name      *string `json:"name"`
}
