package shared

type AppContextAppTypesEnum string

const (
	AppContextAppTypesEnumNative AppContextAppTypesEnum = "NATIVE"
	AppContextAppTypesEnumWeb    AppContextAppTypesEnum = "WEB"
)

// AppContext
// Output only. The app type the restriction applies to for mobile device.
type AppContext struct {
	AppTypes []AppContextAppTypesEnum `json:"appTypes,omitempty"`
}
