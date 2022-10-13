package shared

type ProgrammaticGuaranteedTermsReservationTypeEnum string

const (
	ProgrammaticGuaranteedTermsReservationTypeEnumReservationTypeUnspecified ProgrammaticGuaranteedTermsReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	ProgrammaticGuaranteedTermsReservationTypeEnumStandard                   ProgrammaticGuaranteedTermsReservationTypeEnum = "STANDARD"
	ProgrammaticGuaranteedTermsReservationTypeEnumSponsorship                ProgrammaticGuaranteedTermsReservationTypeEnum = "SPONSORSHIP"
)

type ProgrammaticGuaranteedTerms struct {
	FixedPrice          *Price                                          `json:"fixedPrice"`
	GuaranteedLooks     *string                                         `json:"guaranteedLooks"`
	ImpressionCap       *string                                         `json:"impressionCap"`
	MinimumDailyLooks   *string                                         `json:"minimumDailyLooks"`
	PercentShareOfVoice *string                                         `json:"percentShareOfVoice"`
	ReservationType     *ProgrammaticGuaranteedTermsReservationTypeEnum `json:"reservationType"`
}
