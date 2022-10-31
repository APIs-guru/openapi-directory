package operations

type PrepareTransactionRequestBodyVariationEnum string

const (
	PrepareTransactionRequestBodyVariationEnumGsb        PrepareTransactionRequestBodyVariationEnum = "gsb"
	PrepareTransactionRequestBodyVariationEnumErzeugung  PrepareTransactionRequestBodyVariationEnum = "erzeugung"
	PrepareTransactionRequestBodyVariationEnumEigenstrom PrepareTransactionRequestBodyVariationEnum = "eigenstrom"
	PrepareTransactionRequestBodyVariationEnumCo2        PrepareTransactionRequestBodyVariationEnum = "co2"
	PrepareTransactionRequestBodyVariationEnumBaeume     PrepareTransactionRequestBodyVariationEnum = "baeume"
)

type PrepareTransactionRequestBody struct {
	Account   *string                                     `json:"account,omitempty"`
	Signature *string                                     `json:"signature,omitempty"`
	To        *string                                     `json:"to,omitempty"`
	Value     *int64                                      `json:"value,omitempty"`
	Variation *PrepareTransactionRequestBodyVariationEnum `json:"variation,omitempty"`
}

type PrepareTransactionRequest struct {
	Request PrepareTransactionRequestBody `request:"mediaType=application/json"`
}

type PrepareTransactionResponse struct {
	ContentType string
	StatusCode  int64
}
