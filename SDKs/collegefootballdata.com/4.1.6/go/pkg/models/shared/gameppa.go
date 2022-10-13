package shared

type GamePpaDefense struct {
	FirstDown  *float64 `json:"firstDown"`
	Overall    *float64 `json:"overall"`
	Passing    *float64 `json:"passing"`
	Rushing    *float64 `json:"rushing"`
	SecondDown *float64 `json:"secondDown"`
	ThirdDown  *float64 `json:"thirdDown"`
}

type GamePpaOffense struct {
	FirstDown  *float64 `json:"firstDown"`
	Overall    *float64 `json:"overall"`
	Passing    *float64 `json:"passing"`
	Rushing    *float64 `json:"rushing"`
	SecondDown *float64 `json:"secondDown"`
	ThirdDown  *float64 `json:"thirdDown"`
}

type GamePpa struct {
	Conference *string         `json:"conference"`
	Defense    *GamePpaDefense `json:"defense"`
	ID         *int64          `json:"id"`
	Offense    *GamePpaOffense `json:"offense"`
	Opponnent  *string         `json:"opponnent"`
	Season     *int64          `json:"season"`
	Team       *string         `json:"team"`
	Week       *int64          `json:"week"`
}
