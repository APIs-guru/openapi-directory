package shared



type DirectDeal struct {
    AccountID *int32 `json:"accountId,omitempty"`
    Advertiser *string `json:"advertiser,omitempty"`
    AllowsAlcohol *bool `json:"allowsAlcohol,omitempty"`
    BuyerAccountID *string `json:"buyerAccountId,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DealTier *string `json:"dealTier,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    FixedCpm *string `json:"fixedCpm,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    PrivateExchangeMinCpm *string `json:"privateExchangeMinCpm,omitempty"`
    PublisherBlocksOverriden *bool `json:"publisherBlocksOverriden,omitempty"`
    SellerNetwork *string `json:"sellerNetwork,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

