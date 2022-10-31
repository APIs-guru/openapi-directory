package shared

type AdvancedSeasonStatDefenseFieldPosition struct {
	AveragePredictedPoints *float64 `json:"averagePredictedPoints,omitempty"`
	AverageStart           *float64 `json:"averageStart,omitempty"`
}

type AdvancedSeasonStatDefenseHavoc struct {
	Db         *float64 `json:"db,omitempty"`
	FrontSeven *float64 `json:"frontSeven,omitempty"`
	Total      *float64 `json:"total,omitempty"`
}

type AdvancedSeasonStatDefensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedSeasonStatDefensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStatDefenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStatDefenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedSeasonStatDefense struct {
	Drives                *int64                                  `json:"drives,omitempty"`
	Explosiveness         *float64                                `json:"explosiveness,omitempty"`
	FieldPosition         *AdvancedSeasonStatDefenseFieldPosition `json:"fieldPosition,omitempty"`
	Havoc                 *AdvancedSeasonStatDefenseHavoc         `json:"havoc,omitempty"`
	LineYards             *float64                                `json:"lineYards,omitempty"`
	LineYardsTotal        *float64                                `json:"lineYardsTotal,omitempty"`
	OpenFieldYards        *float64                                `json:"openFieldYards,omitempty"`
	OpenFieldYardsTotal   *int64                                  `json:"openFieldYardsTotal,omitempty"`
	PassingDowns          *AdvancedSeasonStatDefensePassingDowns  `json:"passingDowns,omitempty"`
	PassingPlays          *AdvancedSeasonStatDefensePassingPlays  `json:"passingPlays,omitempty"`
	Plays                 *int64                                  `json:"plays,omitempty"`
	PointsPerOpportunity  *float64                                `json:"pointsPerOpportunity,omitempty"`
	PowerSuccess          *float64                                `json:"powerSuccess,omitempty"`
	Ppa                   *float64                                `json:"ppa,omitempty"`
	RushingPlays          *AdvancedSeasonStatDefenseRushingPlays  `json:"rushingPlays,omitempty"`
	SecondLevelYards      *float64                                `json:"secondLevelYards,omitempty"`
	SecondLevelYardsTotal *int64                                  `json:"secondLevelYardsTotal,omitempty"`
	StandardDowns         *AdvancedSeasonStatDefenseStandardDowns `json:"standardDowns,omitempty"`
	StuffRate             *float64                                `json:"stuffRate,omitempty"`
	SuccessRate           *float64                                `json:"successRate,omitempty"`
	TotalPpa              *float64                                `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStatOffenseFieldPosition struct {
	AveragePredictedPoints *float64 `json:"averagePredictedPoints,omitempty"`
	AverageStart           *float64 `json:"averageStart,omitempty"`
}

type AdvancedSeasonStatOffenseHavoc struct {
	Db         *float64 `json:"db,omitempty"`
	FrontSeven *float64 `json:"frontSeven,omitempty"`
	Total      *float64 `json:"total,omitempty"`
}

type AdvancedSeasonStatOffensePassingDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedSeasonStatOffensePassingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStatOffenseRushingPlays struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
	TotalPpa      *float64 `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStatOffenseStandardDowns struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Ppa           *float64 `json:"ppa,omitempty"`
	Rate          *float64 `json:"rate,omitempty"`
	SuccessRate   *float64 `json:"successRate,omitempty"`
}

type AdvancedSeasonStatOffense struct {
	Drives                *int64                                  `json:"drives,omitempty"`
	Explosiveness         *float64                                `json:"explosiveness,omitempty"`
	FieldPosition         *AdvancedSeasonStatOffenseFieldPosition `json:"fieldPosition,omitempty"`
	Havoc                 *AdvancedSeasonStatOffenseHavoc         `json:"havoc,omitempty"`
	LineYards             *float64                                `json:"lineYards,omitempty"`
	LineYardsTotal        *float64                                `json:"lineYardsTotal,omitempty"`
	OpenFieldYards        *float64                                `json:"openFieldYards,omitempty"`
	OpenFieldYardsTotal   *int64                                  `json:"openFieldYardsTotal,omitempty"`
	PassingDowns          *AdvancedSeasonStatOffensePassingDowns  `json:"passingDowns,omitempty"`
	PassingPlays          *AdvancedSeasonStatOffensePassingPlays  `json:"passingPlays,omitempty"`
	Plays                 *int64                                  `json:"plays,omitempty"`
	PointsPerOpportunity  *float64                                `json:"pointsPerOpportunity,omitempty"`
	PowerSuccess          *float64                                `json:"powerSuccess,omitempty"`
	Ppa                   *float64                                `json:"ppa,omitempty"`
	RushingPlays          *AdvancedSeasonStatOffenseRushingPlays  `json:"rushingPlays,omitempty"`
	SecondLevelYards      *float64                                `json:"secondLevelYards,omitempty"`
	SecondLevelYardsTotal *int64                                  `json:"secondLevelYardsTotal,omitempty"`
	StandardDowns         *AdvancedSeasonStatOffenseStandardDowns `json:"standardDowns,omitempty"`
	StuffRate             *float64                                `json:"stuffRate,omitempty"`
	SuccessRate           *float64                                `json:"successRate,omitempty"`
	TotalPpa              *float64                                `json:"totalPPA,omitempty"`
}

type AdvancedSeasonStat struct {
	Conference *string                    `json:"conference,omitempty"`
	Defense    *AdvancedSeasonStatDefense `json:"defense,omitempty"`
	Offense    *AdvancedSeasonStatOffense `json:"offense,omitempty"`
	Season     *int64                     `json:"season,omitempty"`
	Team       *string                    `json:"team,omitempty"`
}
