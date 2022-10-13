package shared

type AppContextAppTypesEnum string

const (
	AppContextAppTypesEnumNative AppContextAppTypesEnum = "NATIVE"
	AppContextAppTypesEnumWeb    AppContextAppTypesEnum = "WEB"
)

type AppContext struct {
	AppTypes []AppContextAppTypesEnum `json:"appTypes"`
}
