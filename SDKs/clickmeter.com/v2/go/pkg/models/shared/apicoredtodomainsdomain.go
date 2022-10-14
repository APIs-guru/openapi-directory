package shared

type APICoreDtoDomainsDomainTypeEnum string

const (
	APICoreDtoDomainsDomainTypeEnumSystem    APICoreDtoDomainsDomainTypeEnum = "System"
	APICoreDtoDomainsDomainTypeEnumGo        APICoreDtoDomainsDomainTypeEnum = "Go"
	APICoreDtoDomainsDomainTypeEnumDedicated APICoreDtoDomainsDomainTypeEnum = "Dedicated"
	APICoreDtoDomainsDomainTypeEnumPersonal  APICoreDtoDomainsDomainTypeEnum = "Personal"
)

type APICoreDtoDomainsDomain struct {
	Custom404      *string                          `json:"custom404,omitempty" form:"name=custom404"`
	CustomHomepage *string                          `json:"customHomepage,omitempty" form:"name=customHomepage"`
	ID             *int64                           `json:"id,omitempty" form:"name=id"`
	Name           *string                          `json:"name,omitempty" form:"name=name"`
	Type           *APICoreDtoDomainsDomainTypeEnum `json:"type,omitempty" form:"name=type"`
}
