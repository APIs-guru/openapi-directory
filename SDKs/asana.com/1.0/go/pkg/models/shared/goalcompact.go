package shared



type GoalCompactOwner struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

type GoalCompact struct {
    Gid *string `json:"gid,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *GoalCompactOwner `json:"owner,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

