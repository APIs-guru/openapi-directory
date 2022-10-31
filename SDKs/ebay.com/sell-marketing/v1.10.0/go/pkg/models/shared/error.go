package shared



type Error struct {
    Category *string `json:"category,omitempty"`
    Domain *string `json:"domain,omitempty"`
    ErrorID *int32 `json:"errorId,omitempty"`
    InputRefIds []string `json:"inputRefIds,omitempty"`
    LongMessage *string `json:"longMessage,omitempty"`
    Message *string `json:"message,omitempty"`
    OutputRefIds []string `json:"outputRefIds,omitempty"`
    Parameters []ErrorParameter `json:"parameters,omitempty"`
    Subdomain *string `json:"subdomain,omitempty"`
    
}

