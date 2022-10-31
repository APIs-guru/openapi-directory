package shared



type PersonMatch struct {
    FaceMatches []FaceMatch `json:"FaceMatches,omitempty"`
    Person *PersonDetail `json:"Person,omitempty"`
    Timestamp *int64 `json:"Timestamp,omitempty"`
    
}

