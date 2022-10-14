package shared

type PreviousAssetPurchases struct {
	PreviousPurchases []PreviousAssetPurchase `json:"previous_purchases,omitempty"`
	ResultCount       *int32                  `json:"result_count,omitempty"`
}
