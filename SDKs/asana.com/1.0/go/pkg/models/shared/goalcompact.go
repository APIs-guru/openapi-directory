package shared

type GoalCompactOwner struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type GoalCompact struct {
	Gid          *string           `json:"gid"`
	Name         *string           `json:"name"`
	Owner        *GoalCompactOwner `json:"owner"`
	ResourceType *string           `json:"resource_type"`
}
