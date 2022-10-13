package shared

type ProfileFilterLink struct {
	FilterRef  *FilterRef  `json:"filterRef"`
	ID         *string     `json:"id"`
	Kind       *string     `json:"kind"`
	ProfileRef *ProfileRef `json:"profileRef"`
	Rank       *int32      `json:"rank"`
	SelfLink   *string     `json:"selfLink"`
}
