package shared



type RespondActivityTaskCanceledInput struct {
    Details *string `json:"details,omitempty"`
    TaskToken string `json:"taskToken"`
    
}

