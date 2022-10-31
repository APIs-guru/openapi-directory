package shared



type PersonDetection struct {
    Person *PersonDetail `json:"Person,omitempty"`
    Timestamp *int64 `json:"Timestamp,omitempty"`
    
}

