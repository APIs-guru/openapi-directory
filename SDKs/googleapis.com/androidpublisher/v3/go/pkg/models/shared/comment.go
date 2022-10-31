package shared



type Comment struct {
    DeveloperComment *DeveloperComment `json:"developerComment,omitempty"`
    UserComment *UserComment `json:"userComment,omitempty"`
    
}

