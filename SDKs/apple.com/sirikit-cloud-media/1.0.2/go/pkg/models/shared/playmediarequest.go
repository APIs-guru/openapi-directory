package shared



type PlayMediaRequest struct {
    Constraints Constraints `json:"constraints"`
    UserActivity UserActivity `json:"userActivity"`
    Version string `json:"version"`
    
}

