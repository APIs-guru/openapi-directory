package shared



type SearchProductsAsAdminOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ProductViewDetails []ProductViewDetail `json:"ProductViewDetails,omitempty"`
    
}

