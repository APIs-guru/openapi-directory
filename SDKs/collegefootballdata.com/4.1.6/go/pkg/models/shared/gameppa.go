package shared

type GamePpaDefense struct {
	FirstDown  *float64 `json:"firstDown,omitempty"`
	Overall    *float64 `json:"overall,omitempty"`
	Passing    *float64 `json:"passing,omitempty"`
	Rushing    *float64 `json:"rushing,omitempty"`
	SecondDown *float64 `json:"secondDown,omitempty"`
	ThirdDown  *float64 `json:"thirdDown,omitempty"`
}

type GamePpaOffense struct {
	FirstDown  *float64 `json:"firstDown,omitempty"`
	Overall    *float64 `json:"overall,omitempty"`
	Passing    *float64 `json:"passing,omitempty"`
	Rushing    *float64 `json:"rushing,omitempty"`
	SecondDown *float64 `json:"secondDown,omitempty"`
	ThirdDown  *float64 `json:"thirdDown,omitempty"`
}

type GamePpa struct {
	Conference *string         `json:"conference,omitempty"`
	Defense    *GamePpaDefense `json:"defense,omitempty"`
	ID         *int64          `json:"id,omitempty"`
	Offense    *GamePpaOffense `json:"offense,omitempty"`
	Opponnent  *string         `json:"opponnent,omitempty"`
	Season     *int64          `json:"season,omitempty"`
	Team       *string         `json:"team,omitempty"`
	Week       *int64          `json:"week,omitempty"`
}
