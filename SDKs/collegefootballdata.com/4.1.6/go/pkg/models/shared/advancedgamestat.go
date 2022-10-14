package shared

type AdvancedGameStatDefensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedGameStatDefensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedGameStatDefenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedGameStatDefenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedGameStatDefense struct {
	Drives                *int64                                `json:"drives,omitempty"`
	Explosiveness         *float64                              `json:"explosiveness,omitempty"`
	LineYards             *float64                              `json:"lineYards,omitempty"`
	LineYardsTotal        *float64                              `json:"lineYardsTotal,omitempty"`
	OpenFieldYards        *float64                              `json:"openFieldYards,omitempty"`
	OpenFieldYardsTotal   *int64                                `json:"openFieldYardsTotal,omitempty"`
	PassingDowns          *AdvancedGameStatDefensePassingDowns  `json:"passingDowns,omitempty"`
	PassingPlays          *AdvancedGameStatDefensePassingPlays  `json:"passingPlays,omitempty"`
	Plays                 *int64                                `json:"plays,omitempty"`
	PowerSuccess          *float64                              `json:"powerSuccess,omitempty"`
	Ppa                   *float64                              `json:"ppa,omitempty"`
	RushingPlays          *AdvancedGameStatDefenseRushingPlays  `json:"rushingPlays,omitempty"`
	SecondLevelYards      *float64                              `json:"secondLevelYards,omitempty"`
	SecondLevelYardsTotal *int64                                `json:"secondLevelYardsTotal,omitempty"`
	StandardDowns         *AdvancedGameStatDefenseStandardDowns `json:"standardDowns,omitempty"`
	StuffRate             *float64                              `json:"stuffRate,omitempty"`
	SuccessRate           *float64                              `json:"successRate,omitempty"`
	TotalPpa              *float64                              `json:"totalPPA,omitempty"`
}

type AdvancedGameStatOffensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedGameStatOffensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedGameStatOffenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedGameStatOffenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedGameStatOffense struct {
	Drives                *int64                                `json:"drives,omitempty"`
	Explosiveness         *float64                              `json:"explosiveness,omitempty"`
	LineYards             *float64                              `json:"lineYards,omitempty"`
	LineYardsTotal        *float64                              `json:"lineYardsTotal,omitempty"`
	OpenFieldYards        *float64                              `json:"openFieldYards,omitempty"`
	OpenFieldYardsTotal   *int64                                `json:"openFieldYardsTotal,omitempty"`
	PassingDowns          *AdvancedGameStatOffensePassingDowns  `json:"passingDowns,omitempty"`
	PassingPlays          *AdvancedGameStatOffensePassingPlays  `json:"passingPlays,omitempty"`
	Plays                 *int64                                `json:"plays,omitempty"`
	PowerSuccess          *float64                              `json:"powerSuccess,omitempty"`
	Ppa                   *float64                              `json:"ppa,omitempty"`
	RushingPlays          *AdvancedGameStatOffenseRushingPlays  `json:"rushingPlays,omitempty"`
	SecondLevelYards      *float64                              `json:"secondLevelYards,omitempty"`
	SecondLevelYardsTotal *int64                                `json:"secondLevelYardsTotal,omitempty"`
	StandardDowns         *AdvancedGameStatOffenseStandardDowns `json:"standardDowns,omitempty"`
	StuffRate             *float64                              `json:"stuffRate,omitempty"`
	SuccessRate           *float64                              `json:"successRate,omitempty"`
	TotalPpa              *float64                              `json:"totalPPA,omitempty"`
}

type AdvancedGameStat struct {
	Defense  *AdvancedGameStatDefense `json:"defense,omitempty"`
	GameID   *int64                   `json:"gameId,omitempty"`
	Offense  *AdvancedGameStatOffense `json:"offense,omitempty"`
	Opponent *string                  `json:"opponent,omitempty"`
	Season   *int64                   `json:"season,omitempty"`
	Team     *string                  `json:"team,omitempty"`
	Week     *int64                   `json:"week,omitempty"`
}
