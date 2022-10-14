package shared

type CreateAppPkg struct {
	AppPkgName      string                 `json:"appPkgName"`
	AppPkgPath      string                 `json:"appPkgPath"`
	AppPkgVersion   string                 `json:"appPkgVersion"`
	AppProvider     *string                `json:"appProvider,omitempty"`
	Checksum        Checksum               `json:"checksum"`
	UserDefinedData map[string]interface{} `json:"userDefinedData,omitempty"`
}
