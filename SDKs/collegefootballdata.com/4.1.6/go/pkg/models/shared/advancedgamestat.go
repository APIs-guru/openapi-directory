package shared

type AdvancedGameStatDefensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedGameStatDefensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedGameStatDefenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedGameStatDefenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedGameStatDefense struct {
	Drives                *int64                                `json:"drives"`
	Explosiveness         *float64                              `json:"explosiveness"`
	LineYards             *float64                              `json:"lineYards"`
	LineYardsTotal        *float64                              `json:"lineYardsTotal"`
	OpenFieldYards        *float64                              `json:"openFieldYards"`
	OpenFieldYardsTotal   *int64                                `json:"openFieldYardsTotal"`
	PassingDowns          *AdvancedGameStatDefensePassingDowns  `json:"passingDowns"`
	PassingPlays          *AdvancedGameStatDefensePassingPlays  `json:"passingPlays"`
	Plays                 *int64                                `json:"plays"`
	PowerSuccess          *float64                              `json:"powerSuccess"`
	Ppa                   *float64                              `json:"ppa"`
	RushingPlays          *AdvancedGameStatDefenseRushingPlays  `json:"rushingPlays"`
	SecondLevelYards      *float64                              `json:"secondLevelYards"`
	SecondLevelYardsTotal *int64                                `json:"secondLevelYardsTotal"`
	StandardDowns         *AdvancedGameStatDefenseStandardDowns `json:"standardDowns"`
	StuffRate             *float64                              `json:"stuffRate"`
	SuccessRate           *float64                              `json:"successRate"`
	TotalPpa              *float64                              `json:"totalPPA"`
}

type AdvancedGameStatOffensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedGameStatOffensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedGameStatOffenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedGameStatOffenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedGameStatOffense struct {
	Drives                *int64                                `json:"drives"`
	Explosiveness         *float64                              `json:"explosiveness"`
	LineYards             *float64                              `json:"lineYards"`
	LineYardsTotal        *float64                              `json:"lineYardsTotal"`
	OpenFieldYards        *float64                              `json:"openFieldYards"`
	OpenFieldYardsTotal   *int64                                `json:"openFieldYardsTotal"`
	PassingDowns          *AdvancedGameStatOffensePassingDowns  `json:"passingDowns"`
	PassingPlays          *AdvancedGameStatOffensePassingPlays  `json:"passingPlays"`
	Plays                 *int64                                `json:"plays"`
	PowerSuccess          *float64                              `json:"powerSuccess"`
	Ppa                   *float64                              `json:"ppa"`
	RushingPlays          *AdvancedGameStatOffenseRushingPlays  `json:"rushingPlays"`
	SecondLevelYards      *float64                              `json:"secondLevelYards"`
	SecondLevelYardsTotal *int64                                `json:"secondLevelYardsTotal"`
	StandardDowns         *AdvancedGameStatOffenseStandardDowns `json:"standardDowns"`
	StuffRate             *float64                              `json:"stuffRate"`
	SuccessRate           *float64                              `json:"successRate"`
	TotalPpa              *float64                              `json:"totalPPA"`
}

type AdvancedGameStat struct {
	Defense  *AdvancedGameStatDefense `json:"defense"`
	GameID   *int64                   `json:"gameId"`
	Offense  *AdvancedGameStatOffense `json:"offense"`
	Opponent *string                  `json:"opponent"`
	Season   *int64                   `json:"season"`
	Team     *string                  `json:"team"`
	Week     *int64                   `json:"week"`
}
