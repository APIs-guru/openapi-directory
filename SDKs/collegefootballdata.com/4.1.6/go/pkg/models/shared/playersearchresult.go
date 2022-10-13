package shared

type PlayerSearchResult struct {
	FirstName          *string `json:"firstName"`
	Height             *int64  `json:"height"`
	Hometown           *string `json:"hometown"`
	ID                 *int64  `json:"id"`
	Jersey             *int64  `json:"jersey"`
	LastName           *string `json:"lastName"`
	Name               *string `json:"name"`
	Position           *string `json:"position"`
	Team               *string `json:"team"`
	TeamColor          *string `json:"teamColor"`
	TeamColorSecondary *string `json:"teamColorSecondary"`
	Weight             *int64  `json:"weight"`
}
