package shared

type APICoreDtoAccountingGuestTimeFormatEnum string

const (
	APICoreDtoAccountingGuestTimeFormatEnumAmPm APICoreDtoAccountingGuestTimeFormatEnum = "AmPm"
	APICoreDtoAccountingGuestTimeFormatEnumH24  APICoreDtoAccountingGuestTimeFormatEnum = "H24"
)

type APICoreDtoAccountingGuest struct {
	APIKey               *string                                  `json:"apiKey" form:"name=apiKey"`
	ConversionOptions    *APICoreDtoAccountingConversionOptions   `json:"conversionOptions" form:"name=conversionOptions"`
	CreationDate         *string                                  `json:"creationDate" form:"name=creationDate"`
	CurrentGrant         *APICoreDtoGrantsGrant                   `json:"currentGrant" form:"name=currentGrant"`
	DateFormat           *string                                  `json:"dateFormat" form:"name=dateFormat"`
	DecimalSeparator     *string                                  `json:"decimalSeparator" form:"name=decimalSeparator"`
	Email                *string                                  `json:"email" form:"name=email"`
	ExtendedGrants       *APICoreDtoAccountingExtendedGrants      `json:"extendedGrants" form:"name=extendedGrants"`
	GroupGrants          *int64                                   `json:"groupGrants" form:"name=groupGrants"`
	HitOptions           *APICoreDtoAccountingHitOptions          `json:"hitOptions" form:"name=hitOptions"`
	ID                   *int64                                   `json:"id" form:"name=id"`
	Key                  *string                                  `json:"key" form:"name=key"`
	Language             *string                                  `json:"language" form:"name=language"`
	LoginCount           *int32                                   `json:"loginCount" form:"name=loginCount"`
	Name                 *string                                  `json:"name" form:"name=name"`
	Notes                *string                                  `json:"notes" form:"name=notes"`
	NumberGroupSeparator *string                                  `json:"numberGroupSeparator" form:"name=numberGroupSeparator"`
	Password             *string                                  `json:"password" form:"name=password"`
	TimeFormat           *APICoreDtoAccountingGuestTimeFormatEnum `json:"timeFormat" form:"name=timeFormat"`
	TimeZone             *int32                                   `json:"timeZone" form:"name=timeZone"`
	TimeframeMinDate     *string                                  `json:"timeframeMinDate" form:"name=timeframeMinDate"`
	Timezonename         *string                                  `json:"timezonename" form:"name=timezonename"`
	TlGrants             *int64                                   `json:"tlGrants" form:"name=tlGrants"`
	TpGrants             *int64                                   `json:"tpGrants" form:"name=tpGrants"`
	UserName             *string                                  `json:"userName" form:"name=userName"`
}
