package shared

type TeamPpaDefenseCumulative struct {
	Passing *float64 `json:"passing,omitempty"`
	Rushing *float64 `json:"rushing,omitempty"`
	Total   *float64 `json:"total,omitempty"`
}

type TeamPpaDefense struct {
	Cumulative *TeamPpaDefenseCumulative `json:"cumulative,omitempty"`
	FirstDown  *float64                  `json:"firstDown,omitempty"`
	Overall    *float64                  `json:"overall,omitempty"`
	Passing    *float64                  `json:"passing,omitempty"`
	Rushing    *float64                  `json:"rushing,omitempty"`
	SecondDown *float64                  `json:"secondDown,omitempty"`
	ThirdDown  *float64                  `json:"thirdDown,omitempty"`
}

type TeamPpaOffenseCumulative struct {
	Passing *float64 `json:"passing,omitempty"`
	Rushing *float64 `json:"rushing,omitempty"`
	Total   *float64 `json:"total,omitempty"`
}

type TeamPpaOffense struct {
	Cumulative *TeamPpaOffenseCumulative `json:"cumulative,omitempty"`
	FirstDown  *float64                  `json:"firstDown,omitempty"`
	Overall    *float64                  `json:"overall,omitempty"`
	Passing    *float64                  `json:"passing,omitempty"`
	Rushing    *float64                  `json:"rushing,omitempty"`
	SecondDown *float64                  `json:"secondDown,omitempty"`
	ThirdDown  *float64                  `json:"thirdDown,omitempty"`
}

type TeamPpa struct {
	Conference *string         `json:"conference,omitempty"`
	Defense    *TeamPpaDefense `json:"defense,omitempty"`
	Offense    *TeamPpaOffense `json:"offense,omitempty"`
	Season     *int64          `json:"season,omitempty"`
	Team       *string         `json:"team,omitempty"`
}
