package shared



type PersonDetail struct {
    BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
    Face *FaceDetail `json:"Face,omitempty"`
    Index *int64 `json:"Index,omitempty"`
    
}

