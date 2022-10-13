package shared

type ChefConfiguration struct {
	BerkshelfVersion *string `json:"BerkshelfVersion"`
	ManageBerkshelf  *bool   `json:"ManageBerkshelf"`
}
