package shared

type AdvancedSeasonStatDefenseFieldPosition struct {
	AveragePredictedPoints *float64 `json:"averagePredictedPoints"`
	AverageStart           *float64 `json:"averageStart"`
}

type AdvancedSeasonStatDefenseHavoc struct {
	Db         *float64 `json:"db"`
	FrontSeven *float64 `json:"frontSeven"`
	Total      *float64 `json:"total"`
}

type AdvancedSeasonStatDefensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedSeasonStatDefensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedSeasonStatDefenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedSeasonStatDefenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedSeasonStatDefense struct {
	Drives                *int64                                  `json:"drives"`
	Explosiveness         *float64                                `json:"explosiveness"`
	FieldPosition         *AdvancedSeasonStatDefenseFieldPosition `json:"fieldPosition"`
	Havoc                 *AdvancedSeasonStatDefenseHavoc         `json:"havoc"`
	LineYards             *float64                                `json:"lineYards"`
	LineYardsTotal        *float64                                `json:"lineYardsTotal"`
	OpenFieldYards        *float64                                `json:"openFieldYards"`
	OpenFieldYardsTotal   *int64                                  `json:"openFieldYardsTotal"`
	PassingDowns          *AdvancedSeasonStatDefensePassingDowns  `json:"passingDowns"`
	PassingPlays          *AdvancedSeasonStatDefensePassingPlays  `json:"passingPlays"`
	Plays                 *int64                                  `json:"plays"`
	PointsPerOpportunity  *float64                                `json:"pointsPerOpportunity"`
	PowerSuccess          *float64                                `json:"powerSuccess"`
	Ppa                   *float64                                `json:"ppa"`
	RushingPlays          *AdvancedSeasonStatDefenseRushingPlays  `json:"rushingPlays"`
	SecondLevelYards      *float64                                `json:"secondLevelYards"`
	SecondLevelYardsTotal *int64                                  `json:"secondLevelYardsTotal"`
	StandardDowns         *AdvancedSeasonStatDefenseStandardDowns `json:"standardDowns"`
	StuffRate             *float64                                `json:"stuffRate"`
	SuccessRate           *float64                                `json:"successRate"`
	TotalPpa              *float64                                `json:"totalPPA"`
}

type AdvancedSeasonStatOffenseFieldPosition struct {
	AveragePredictedPoints *float64 `json:"averagePredictedPoints"`
	AverageStart           *float64 `json:"averageStart"`
}

type AdvancedSeasonStatOffenseHavoc struct {
	Db         *float64 `json:"db"`
	FrontSeven *float64 `json:"frontSeven"`
	Total      *float64 `json:"total"`
}

type AdvancedSeasonStatOffensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedSeasonStatOffensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedSeasonStatOffenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
	TotalPpa      *float64 `json:"totalPPA"`
}

type AdvancedSeasonStatOffenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness"`
	Ppa           *float64 `json:"ppa"`
	Rate          *float64 `json:"rate"`
	SuccessRate   *float64 `json:"successRate"`
}

type AdvancedSeasonStatOffense struct {
	Drives                *int64                                  `json:"drives"`
	Explosiveness         *float64                                `json:"explosiveness"`
	FieldPosition         *AdvancedSeasonStatOffenseFieldPosition `json:"fieldPosition"`
	Havoc                 *AdvancedSeasonStatOffenseHavoc         `json:"havoc"`
	LineYards             *float64                                `json:"lineYards"`
	LineYardsTotal        *float64                                `json:"lineYardsTotal"`
	OpenFieldYards        *float64                                `json:"openFieldYards"`
	OpenFieldYardsTotal   *int64                                  `json:"openFieldYardsTotal"`
	PassingDowns          *AdvancedSeasonStatOffensePassingDowns  `json:"passingDowns"`
	PassingPlays          *AdvancedSeasonStatOffensePassingPlays  `json:"passingPlays"`
	Plays                 *int64                                  `json:"plays"`
	PointsPerOpportunity  *float64                                `json:"pointsPerOpportunity"`
	PowerSuccess          *float64                                `json:"powerSuccess"`
	Ppa                   *float64                                `json:"ppa"`
	RushingPlays          *AdvancedSeasonStatOffenseRushingPlays  `json:"rushingPlays"`
	SecondLevelYards      *float64                                `json:"secondLevelYards"`
	SecondLevelYardsTotal *int64                                  `json:"secondLevelYardsTotal"`
	StandardDowns         *AdvancedSeasonStatOffenseStandardDowns `json:"standardDowns"`
	StuffRate             *float64                                `json:"stuffRate"`
	SuccessRate           *float64                                `json:"successRate"`
	TotalPpa              *float64                                `json:"totalPPA"`
}

type AdvancedSeasonStat struct {
	Conference *string                    `json:"conference"`
	Defense    *AdvancedSeasonStatDefense `json:"defense"`
	Offense    *AdvancedSeasonStatOffense `json:"offense"`
	Season     *int64                     `json:"season"`
	Team       *string                    `json:"team"`
}
