package shared

// Comment
// An entry of conversation between user and developer.
type Comment struct {
	DeveloperComment *DeveloperComment `json:"developerComment,omitempty"`
	UserComment      *UserComment      `json:"userComment,omitempty"`
}
