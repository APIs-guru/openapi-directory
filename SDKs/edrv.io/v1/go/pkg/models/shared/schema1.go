package shared

type Schema1 struct {
	Location     *string `json:"location"`
	Manufacturer *string `json:"manufacturer"`
	Model        *string `json:"model"`
	Protocol     *string `json:"protocol"`
	Public       *bool   `json:"public"`
}
