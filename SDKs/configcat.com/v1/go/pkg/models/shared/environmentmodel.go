package shared

type EnvironmentModel struct {
	EnvironmentID *string       `json:"environmentId,omitempty"`
	Name          *string       `json:"name,omitempty"`
	Product       *ProductModel `json:"product,omitempty"`
}
