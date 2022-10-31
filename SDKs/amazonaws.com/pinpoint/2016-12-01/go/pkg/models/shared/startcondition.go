package shared



type StartCondition struct {
    Description *string `json:"Description,omitempty"`
    EventStartCondition *EventStartCondition `json:"EventStartCondition,omitempty"`
    SegmentStartCondition *SegmentCondition `json:"SegmentStartCondition,omitempty"`
    
}

