package shared

import (
	"time"
)

type TokensPartnerOfferHistoryResponse struct {
	ApplyDate            *time.Time
	IsConsumable         *bool
	LocalizedDescription *string
	LocalizedName        *string
	MembershipID         *int64
	MembershipType       *int32
	PartnerOfferKey      *string
	QuantityApplied      *int32
}
