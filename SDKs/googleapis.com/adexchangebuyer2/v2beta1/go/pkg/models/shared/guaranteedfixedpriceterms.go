package shared

type GuaranteedFixedPriceTermsReservationTypeEnum string

const (
	GuaranteedFixedPriceTermsReservationTypeEnumReservationTypeUnspecified GuaranteedFixedPriceTermsReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	GuaranteedFixedPriceTermsReservationTypeEnumStandard                   GuaranteedFixedPriceTermsReservationTypeEnum = "STANDARD"
	GuaranteedFixedPriceTermsReservationTypeEnumSponsorship                GuaranteedFixedPriceTermsReservationTypeEnum = "SPONSORSHIP"
)

type GuaranteedFixedPriceTerms struct {
	FixedPrices           []PricePerBuyer                               `json:"fixedPrices"`
	GuaranteedImpressions *string                                       `json:"guaranteedImpressions"`
	GuaranteedLooks       *string                                       `json:"guaranteedLooks"`
	ImpressionCap         *string                                       `json:"impressionCap"`
	MinimumDailyLooks     *string                                       `json:"minimumDailyLooks"`
	PercentShareOfVoice   *string                                       `json:"percentShareOfVoice"`
	ReservationType       *GuaranteedFixedPriceTermsReservationTypeEnum `json:"reservationType"`
}
