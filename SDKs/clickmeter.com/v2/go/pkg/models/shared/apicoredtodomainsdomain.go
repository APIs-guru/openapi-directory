package shared

type APICoreDtoDomainsDomainTypeEnum string

const (
	APICoreDtoDomainsDomainTypeEnumSystem    APICoreDtoDomainsDomainTypeEnum = "System"
	APICoreDtoDomainsDomainTypeEnumGo        APICoreDtoDomainsDomainTypeEnum = "Go"
	APICoreDtoDomainsDomainTypeEnumDedicated APICoreDtoDomainsDomainTypeEnum = "Dedicated"
	APICoreDtoDomainsDomainTypeEnumPersonal  APICoreDtoDomainsDomainTypeEnum = "Personal"
)

type APICoreDtoDomainsDomain struct {
	Custom404      *string                          `json:"custom404" form:"name=custom404"`
	CustomHomepage *string                          `json:"customHomepage" form:"name=customHomepage"`
	ID             *int64                           `json:"id" form:"name=id"`
	Name           *string                          `json:"name" form:"name=name"`
	Type           *APICoreDtoDomainsDomainTypeEnum `json:"type" form:"name=type"`
}
