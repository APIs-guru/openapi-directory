package shared

type SearchProductsAsAdminOutput struct {
	NextPageToken      *string             `json:"NextPageToken"`
	ProductViewDetails []ProductViewDetail `json:"ProductViewDetails"`
}
