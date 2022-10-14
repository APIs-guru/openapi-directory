package shared

type Schema1 struct {
	Location     *string `json:"location,omitempty"`
	Manufacturer *string `json:"manufacturer,omitempty"`
	Model        *string `json:"model,omitempty"`
	Protocol     *string `json:"protocol,omitempty"`
	Public       *bool   `json:"public,omitempty"`
}
