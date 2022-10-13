package shared

type DirectDeal struct {
	AccountID                *int32  `json:"accountId"`
	Advertiser               *string `json:"advertiser"`
	AllowsAlcohol            *bool   `json:"allowsAlcohol"`
	BuyerAccountID           *string `json:"buyerAccountId"`
	CurrencyCode             *string `json:"currencyCode"`
	DealTier                 *string `json:"dealTier"`
	EndTime                  *string `json:"endTime"`
	FixedCpm                 *string `json:"fixedCpm"`
	ID                       *string `json:"id"`
	Kind                     *string `json:"kind"`
	Name                     *string `json:"name"`
	PrivateExchangeMinCpm    *string `json:"privateExchangeMinCpm"`
	PublisherBlocksOverriden *bool   `json:"publisherBlocksOverriden"`
	SellerNetwork            *string `json:"sellerNetwork"`
	StartTime                *string `json:"startTime"`
}
