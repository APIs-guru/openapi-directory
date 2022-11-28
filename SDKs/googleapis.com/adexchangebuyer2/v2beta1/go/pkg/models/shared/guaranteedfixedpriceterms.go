package shared

type GuaranteedFixedPriceTermsReservationTypeEnum string

const (
	GuaranteedFixedPriceTermsReservationTypeEnumReservationTypeUnspecified GuaranteedFixedPriceTermsReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	GuaranteedFixedPriceTermsReservationTypeEnumStandard                   GuaranteedFixedPriceTermsReservationTypeEnum = "STANDARD"
	GuaranteedFixedPriceTermsReservationTypeEnumSponsorship                GuaranteedFixedPriceTermsReservationTypeEnum = "SPONSORSHIP"
)

// GuaranteedFixedPriceTerms
// Terms for Programmatic Guaranteed Deals.
type GuaranteedFixedPriceTerms struct {
	FixedPrices           []PricePerBuyer                               `json:"fixedPrices,omitempty"`
	GuaranteedImpressions *string                                       `json:"guaranteedImpressions,omitempty"`
	GuaranteedLooks       *string                                       `json:"guaranteedLooks,omitempty"`
	ImpressionCap         *string                                       `json:"impressionCap,omitempty"`
	MinimumDailyLooks     *string                                       `json:"minimumDailyLooks,omitempty"`
	PercentShareOfVoice   *string                                       `json:"percentShareOfVoice,omitempty"`
	ReservationType       *GuaranteedFixedPriceTermsReservationTypeEnum `json:"reservationType,omitempty"`
}
