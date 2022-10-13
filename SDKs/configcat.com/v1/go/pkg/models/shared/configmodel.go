package shared

type ConfigModel struct {
	ConfigID *string       `json:"configId"`
	Name     *string       `json:"name"`
	Product  *ProductModel `json:"product"`
}
