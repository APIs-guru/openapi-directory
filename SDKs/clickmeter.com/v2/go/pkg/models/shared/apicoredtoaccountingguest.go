package shared

type APICoreDtoAccountingGuestTimeFormatEnum string

const (
	APICoreDtoAccountingGuestTimeFormatEnumAmPm APICoreDtoAccountingGuestTimeFormatEnum = "AmPm"
	APICoreDtoAccountingGuestTimeFormatEnumH24  APICoreDtoAccountingGuestTimeFormatEnum = "H24"
)

type APICoreDtoAccountingGuest struct {
	APIKey               *string                                  `json:"apiKey,omitempty" form:"name=apiKey"`
	ConversionOptions    *APICoreDtoAccountingConversionOptions   `json:"conversionOptions,omitempty" form:"name=conversionOptions"`
	CreationDate         *string                                  `json:"creationDate,omitempty" form:"name=creationDate"`
	CurrentGrant         *APICoreDtoGrantsGrant                   `json:"currentGrant,omitempty" form:"name=currentGrant"`
	DateFormat           *string                                  `json:"dateFormat,omitempty" form:"name=dateFormat"`
	DecimalSeparator     *string                                  `json:"decimalSeparator,omitempty" form:"name=decimalSeparator"`
	Email                *string                                  `json:"email,omitempty" form:"name=email"`
	ExtendedGrants       *APICoreDtoAccountingExtendedGrants      `json:"extendedGrants,omitempty" form:"name=extendedGrants"`
	GroupGrants          *int64                                   `json:"groupGrants,omitempty" form:"name=groupGrants"`
	HitOptions           *APICoreDtoAccountingHitOptions          `json:"hitOptions,omitempty" form:"name=hitOptions"`
	ID                   *int64                                   `json:"id,omitempty" form:"name=id"`
	Key                  *string                                  `json:"key,omitempty" form:"name=key"`
	Language             *string                                  `json:"language,omitempty" form:"name=language"`
	LoginCount           *int32                                   `json:"loginCount,omitempty" form:"name=loginCount"`
	Name                 *string                                  `json:"name,omitempty" form:"name=name"`
	Notes                *string                                  `json:"notes,omitempty" form:"name=notes"`
	NumberGroupSeparator *string                                  `json:"numberGroupSeparator,omitempty" form:"name=numberGroupSeparator"`
	Password             *string                                  `json:"password,omitempty" form:"name=password"`
	TimeFormat           *APICoreDtoAccountingGuestTimeFormatEnum `json:"timeFormat,omitempty" form:"name=timeFormat"`
	TimeZone             *int32                                   `json:"timeZone,omitempty" form:"name=timeZone"`
	TimeframeMinDate     *string                                  `json:"timeframeMinDate,omitempty" form:"name=timeframeMinDate"`
	Timezonename         *string                                  `json:"timezonename,omitempty" form:"name=timezonename"`
	TlGrants             *int64                                   `json:"tlGrants,omitempty" form:"name=tlGrants"`
	TpGrants             *int64                                   `json:"tpGrants,omitempty" form:"name=tpGrants"`
	UserName             *string                                  `json:"userName,omitempty" form:"name=userName"`
}
