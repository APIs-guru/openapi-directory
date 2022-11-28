package shared

import (
	"time"
)

type TokensPartnerOfferSkuHistoryResponse struct {
	AllOffersApplied     *bool
	ClaimDate            *time.Time
	LocalizedDescription *string
	LocalizedName        *string
	SkuIdentifier        *string
	SkuOffers            []TokensPartnerOfferHistoryResponse
	TransactionID        *string
}
