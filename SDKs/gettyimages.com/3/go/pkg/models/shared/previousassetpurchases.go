package shared

type PreviousAssetPurchases struct {
	PreviousPurchases []PreviousAssetPurchase `json:"previous_purchases"`
	ResultCount       *int32                  `json:"result_count"`
}
