package shared

type EnvironmentModel struct {
	EnvironmentID *string       `json:"environmentId"`
	Name          *string       `json:"name"`
	Product       *ProductModel `json:"product"`
}
