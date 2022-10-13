package shared

type AccountTreeResponse struct {
	Account     *Account     `json:"account"`
	Kind        *string      `json:"kind"`
	Profile     *Profile     `json:"profile"`
	Webproperty *Webproperty `json:"webproperty"`
}
