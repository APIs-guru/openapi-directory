package shared



type ChangeSummary struct {
    ChangeName *string `json:"ChangeName,omitempty"`
    ChangeType *string `json:"ChangeType,omitempty"`
    Details *string `json:"Details,omitempty"`
    Entity *Entity `json:"Entity,omitempty"`
    ErrorDetailList []ErrorDetail `json:"ErrorDetailList,omitempty"`
    
}

