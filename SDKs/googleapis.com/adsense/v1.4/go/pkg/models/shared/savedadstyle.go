package shared

type SavedAdStyle struct {
	AdStyle *AdStyle `json:"adStyle"`
	ID      *string  `json:"id"`
	Kind    *string  `json:"kind"`
	Name    *string  `json:"name"`
}
