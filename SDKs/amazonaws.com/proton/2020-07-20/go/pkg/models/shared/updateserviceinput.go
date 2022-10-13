package shared

type UpdateServiceInput struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
	Spec        *string `json:"spec"`
}
