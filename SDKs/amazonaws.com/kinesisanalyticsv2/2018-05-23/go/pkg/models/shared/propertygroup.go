package shared

// PropertyGroup
// Property key-value pairs passed into an application.
type PropertyGroup struct {
	PropertyGroupID string            `json:"PropertyGroupId"`
	PropertyMap     map[string]string `json:"PropertyMap"`
}
