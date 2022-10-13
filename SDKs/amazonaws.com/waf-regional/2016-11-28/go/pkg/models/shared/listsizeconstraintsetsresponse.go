package shared

type ListSizeConstraintSetsResponse struct {
	NextMarker         *string                    `json:"NextMarker"`
	SizeConstraintSets []SizeConstraintSetSummary `json:"SizeConstraintSets"`
}
