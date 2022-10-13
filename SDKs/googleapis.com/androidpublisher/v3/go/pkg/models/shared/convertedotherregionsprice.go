package shared

type ConvertedOtherRegionsPrice struct {
	EurPrice *Money `json:"eurPrice"`
	UsdPrice *Money `json:"usdPrice"`
}
