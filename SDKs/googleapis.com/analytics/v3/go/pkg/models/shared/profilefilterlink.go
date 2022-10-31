package shared



type ProfileFilterLink struct {
    FilterRef *FilterRef `json:"filterRef,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProfileRef *ProfileRef `json:"profileRef,omitempty"`
    Rank *int32 `json:"rank,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    
}

