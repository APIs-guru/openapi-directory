package shared

type EeBtEligibility struct {
	Eligible bool    `json:"eligible"`
	Plan     *string `json:"plan"`
	Source   *string `json:"source"`
}
