package shared

type UserCompact struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}
