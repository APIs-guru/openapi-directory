package shared



type Slot struct {
    Value *Value `json:"value,omitempty"`
    Values []Slot `json:"values,omitempty"`
    
}

