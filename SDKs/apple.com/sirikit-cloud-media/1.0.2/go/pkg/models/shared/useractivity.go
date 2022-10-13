package shared

type UserActivity struct {
	ActivityType         string                 `json:"activityType"`
	PersistentIdentifier *string                `json:"persistentIdentifier"`
	Title                *string                `json:"title"`
	UserInfo             map[string]interface{} `json:"userInfo"`
	Version              string                 `json:"version"`
}
