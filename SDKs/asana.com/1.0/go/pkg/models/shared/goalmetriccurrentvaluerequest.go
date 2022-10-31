package shared



type GoalMetricCurrentValueRequest struct {
    CurrentNumberValue *float64 `json:"current_number_value,omitempty"`
    Gid *string `json:"gid,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    
}

