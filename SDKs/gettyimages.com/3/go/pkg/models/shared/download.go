package shared

type Download struct {
	AgreementName *string `json:"agreement_name"`
	ProductID     *string `json:"product_id"`
	ProductType   *string `json:"product_type"`
	URI           *string `json:"uri"`
}
