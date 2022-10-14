package shared

type ProgrammaticGuaranteedTermsReservationTypeEnum string

const (
	ProgrammaticGuaranteedTermsReservationTypeEnumReservationTypeUnspecified ProgrammaticGuaranteedTermsReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	ProgrammaticGuaranteedTermsReservationTypeEnumStandard                   ProgrammaticGuaranteedTermsReservationTypeEnum = "STANDARD"
	ProgrammaticGuaranteedTermsReservationTypeEnumSponsorship                ProgrammaticGuaranteedTermsReservationTypeEnum = "SPONSORSHIP"
)

type ProgrammaticGuaranteedTerms struct {
	FixedPrice          *Price                                          `json:"fixedPrice,omitempty"`
	GuaranteedLooks     *string                                         `json:"guaranteedLooks,omitempty"`
	ImpressionCap       *string                                         `json:"impressionCap,omitempty"`
	MinimumDailyLooks   *string                                         `json:"minimumDailyLooks,omitempty"`
	PercentShareOfVoice *string                                         `json:"percentShareOfVoice,omitempty"`
	ReservationType     *ProgrammaticGuaranteedTermsReservationTypeEnum `json:"reservationType,omitempty"`
}
