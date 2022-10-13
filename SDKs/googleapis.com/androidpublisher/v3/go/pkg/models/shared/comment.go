package shared

type Comment struct {
	DeveloperComment *DeveloperComment `json:"developerComment"`
	UserComment      *UserComment      `json:"userComment"`
}
