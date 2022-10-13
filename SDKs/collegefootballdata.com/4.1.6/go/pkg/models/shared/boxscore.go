package shared

type BoxScorePlayersPpaAverage struct {
	Passing  *float64 `json:"passing"`
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Rushing  *float64 `json:"rushing"`
	Total    *float64 `json:"total"`
}

type BoxScorePlayersPpaCumulative struct {
	Passing  *float64 `json:"passing"`
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Rushing  *float64 `json:"rushing"`
	Total    *float64 `json:"total"`
}

type BoxScorePlayersPpa struct {
	Average    *BoxScorePlayersPpaAverage    `json:"average"`
	Cumulative *BoxScorePlayersPpaCumulative `json:"cumulative"`
	Player     *string                       `json:"player"`
	Position   *string                       `json:"position"`
	Team       *string                       `json:"team"`
}

type BoxScorePlayersUsage struct {
	Passing  *float64 `json:"passing"`
	Player   *string  `json:"player"`
	Position *string  `json:"position"`
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Rushing  *float64 `json:"rushing"`
	Team     *string  `json:"team"`
	Total    *float64 `json:"total"`
}

type BoxScorePlayers struct {
	Ppa   []BoxScorePlayersPpa   `json:"ppa"`
	Usage []BoxScorePlayersUsage `json:"usage"`
}

type BoxScoreTeamsCumulativePpaOverall struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsCumulativePpaPassing struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsCumulativePpaRushing struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsCumulativePpa struct {
	Overall *BoxScoreTeamsCumulativePpaOverall `json:"overall"`
	Passing *BoxScoreTeamsCumulativePpaPassing `json:"passing"`
	Plays   *float64                           `json:"plays"`
	Rushing *BoxScoreTeamsCumulativePpaRushing `json:"rushing"`
	Team    *string                            `json:"team"`
}

type BoxScoreTeamsExplosivenessOverall struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsExplosiveness struct {
	Overall *BoxScoreTeamsExplosivenessOverall `json:"overall"`
	Team    *string                            `json:"team"`
}

type BoxScoreTeamsFieldPosition struct {
	AverageStart                   *float64 `json:"averageStart"`
	AverageStartingPredictedPoints *float64 `json:"averageStartingPredictedPoints"`
	Team                           *string  `json:"team"`
}

type BoxScoreTeamsHavoc struct {
	Db         *float64 `json:"db"`
	FrontSeven *float64 `json:"frontSeven"`
	Team       *string  `json:"team"`
	Total      *float64 `json:"total"`
}

type BoxScoreTeamsPpaOverall struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsPpaPassing struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsPpaRushing struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsPpa struct {
	Overall *BoxScoreTeamsPpaOverall `json:"overall"`
	Passing *BoxScoreTeamsPpaPassing `json:"passing"`
	Plays   *float64                 `json:"plays"`
	Rushing *BoxScoreTeamsPpaRushing `json:"rushing"`
	Team    *string                  `json:"team"`
}

type BoxScoreTeamsRushing struct {
	LineYards               *float64 `json:"lineYards"`
	LineYardsAverage        *float64 `json:"lineYardsAverage"`
	OpenFieldYards          *int64   `json:"openFieldYards"`
	OpenFieldYardsAverage   *float64 `json:"openFieldYardsAverage"`
	PowerSuccess            *float64 `json:"powerSuccess"`
	SecondLevelYards        *int64   `json:"secondLevelYards"`
	SecondLevelYardsAverage *float64 `json:"secondLevelYardsAverage"`
	StuffRate               *float64 `json:"stuffRate"`
	Team                    *string  `json:"team"`
}

type BoxScoreTeamsScoringOpportunities struct {
	Opportunities        *int64   `json:"opportunities"`
	Points               *int64   `json:"points"`
	PointsPerOpportunity *float64 `json:"pointsPerOpportunity"`
	Team                 *string  `json:"team"`
}

type BoxScoreTeamsSuccessRatesOverall struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsSuccessRatesPassingDowns struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsSuccessRatesStandardDowns struct {
	Quarter1 *float64 `json:"quarter1"`
	Quarter2 *float64 `json:"quarter2"`
	Quarter3 *float64 `json:"quarter3"`
	Quarter4 *float64 `json:"quarter4"`
	Total    *float64 `json:"total"`
}

type BoxScoreTeamsSuccessRates struct {
	Overall       *BoxScoreTeamsSuccessRatesOverall       `json:"overall"`
	PassingDowns  *BoxScoreTeamsSuccessRatesPassingDowns  `json:"passingDowns"`
	StandardDowns *BoxScoreTeamsSuccessRatesStandardDowns `json:"standardDowns"`
	Team          *string                                 `json:"team"`
}

type BoxScoreTeams struct {
	CumulativePpa        []BoxScoreTeamsCumulativePpa        `json:"cumulativePpa"`
	Explosiveness        []BoxScoreTeamsExplosiveness        `json:"explosiveness"`
	FieldPosition        []BoxScoreTeamsFieldPosition        `json:"fieldPosition"`
	Havoc                []BoxScoreTeamsHavoc                `json:"havoc"`
	Ppa                  []BoxScoreTeamsPpa                  `json:"ppa"`
	Rushing              []BoxScoreTeamsRushing              `json:"rushing"`
	ScoringOpportunities []BoxScoreTeamsScoringOpportunities `json:"scoringOpportunities"`
	SuccessRates         []BoxScoreTeamsSuccessRates         `json:"successRates"`
}

type BoxScore struct {
	Players *BoxScorePlayers `json:"players"`
	Teams   *BoxScoreTeams   `json:"teams"`
}
