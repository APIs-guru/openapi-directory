package shared

type PropertyGroup struct {
	PropertyGroupID string            `json:"PropertyGroupId"`
	PropertyMap     map[string]string `json:"PropertyMap"`
}
