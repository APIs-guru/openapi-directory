package shared

type TeamPpaDefenseCumulative struct {
	Passing *float64 `json:"passing"`
	Rushing *float64 `json:"rushing"`
	Total   *float64 `json:"total"`
}

type TeamPpaDefense struct {
	Cumulative *TeamPpaDefenseCumulative `json:"cumulative"`
	FirstDown  *float64                  `json:"firstDown"`
	Overall    *float64                  `json:"overall"`
	Passing    *float64                  `json:"passing"`
	Rushing    *float64                  `json:"rushing"`
	SecondDown *float64                  `json:"secondDown"`
	ThirdDown  *float64                  `json:"thirdDown"`
}

type TeamPpaOffenseCumulative struct {
	Passing *float64 `json:"passing"`
	Rushing *float64 `json:"rushing"`
	Total   *float64 `json:"total"`
}

type TeamPpaOffense struct {
	Cumulative *TeamPpaOffenseCumulative `json:"cumulative"`
	FirstDown  *float64                  `json:"firstDown"`
	Overall    *float64                  `json:"overall"`
	Passing    *float64                  `json:"passing"`
	Rushing    *float64                  `json:"rushing"`
	SecondDown *float64                  `json:"secondDown"`
	ThirdDown  *float64                  `json:"thirdDown"`
}

type TeamPpa struct {
	Conference *string         `json:"conference"`
	Defense    *TeamPpaDefense `json:"defense"`
	Offense    *TeamPpaOffense `json:"offense"`
	Season     *int64          `json:"season"`
	Team       *string         `json:"team"`
}
