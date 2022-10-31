package shared



type BoxScorePlayersPpaAverage struct {
    Passing *float64 `json:"passing,omitempty"`
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Rushing *float64 `json:"rushing,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScorePlayersPpaCumulative struct {
    Passing *float64 `json:"passing,omitempty"`
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Rushing *float64 `json:"rushing,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScorePlayersPpa struct {
    Average *BoxScorePlayersPpaAverage `json:"average,omitempty"`
    Cumulative *BoxScorePlayersPpaCumulative `json:"cumulative,omitempty"`
    Player *string `json:"player,omitempty"`
    Position *string `json:"position,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScorePlayersUsage struct {
    Passing *float64 `json:"passing,omitempty"`
    Player *string `json:"player,omitempty"`
    Position *string `json:"position,omitempty"`
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Rushing *float64 `json:"rushing,omitempty"`
    Team *string `json:"team,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScorePlayers struct {
    Ppa []BoxScorePlayersPpa `json:"ppa,omitempty"`
    Usage []BoxScorePlayersUsage `json:"usage,omitempty"`
    
}

type BoxScoreTeamsCumulativePpaOverall struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsCumulativePpaPassing struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsCumulativePpaRushing struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsCumulativePpa struct {
    Overall *BoxScoreTeamsCumulativePpaOverall `json:"overall,omitempty"`
    Passing *BoxScoreTeamsCumulativePpaPassing `json:"passing,omitempty"`
    Plays *float64 `json:"plays,omitempty"`
    Rushing *BoxScoreTeamsCumulativePpaRushing `json:"rushing,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsExplosivenessOverall struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsExplosiveness struct {
    Overall *BoxScoreTeamsExplosivenessOverall `json:"overall,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsFieldPosition struct {
    AverageStart *float64 `json:"averageStart,omitempty"`
    AverageStartingPredictedPoints *float64 `json:"averageStartingPredictedPoints,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsHavoc struct {
    Db *float64 `json:"db,omitempty"`
    FrontSeven *float64 `json:"frontSeven,omitempty"`
    Team *string `json:"team,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsPpaOverall struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsPpaPassing struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsPpaRushing struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsPpa struct {
    Overall *BoxScoreTeamsPpaOverall `json:"overall,omitempty"`
    Passing *BoxScoreTeamsPpaPassing `json:"passing,omitempty"`
    Plays *float64 `json:"plays,omitempty"`
    Rushing *BoxScoreTeamsPpaRushing `json:"rushing,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsRushing struct {
    LineYards *float64 `json:"lineYards,omitempty"`
    LineYardsAverage *float64 `json:"lineYardsAverage,omitempty"`
    OpenFieldYards *int64 `json:"openFieldYards,omitempty"`
    OpenFieldYardsAverage *float64 `json:"openFieldYardsAverage,omitempty"`
    PowerSuccess *float64 `json:"powerSuccess,omitempty"`
    SecondLevelYards *int64 `json:"secondLevelYards,omitempty"`
    SecondLevelYardsAverage *float64 `json:"secondLevelYardsAverage,omitempty"`
    StuffRate *float64 `json:"stuffRate,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsScoringOpportunities struct {
    Opportunities *int64 `json:"opportunities,omitempty"`
    Points *int64 `json:"points,omitempty"`
    PointsPerOpportunity *float64 `json:"pointsPerOpportunity,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeamsSuccessRatesOverall struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsSuccessRatesPassingDowns struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsSuccessRatesStandardDowns struct {
    Quarter1 *float64 `json:"quarter1,omitempty"`
    Quarter2 *float64 `json:"quarter2,omitempty"`
    Quarter3 *float64 `json:"quarter3,omitempty"`
    Quarter4 *float64 `json:"quarter4,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type BoxScoreTeamsSuccessRates struct {
    Overall *BoxScoreTeamsSuccessRatesOverall `json:"overall,omitempty"`
    PassingDowns *BoxScoreTeamsSuccessRatesPassingDowns `json:"passingDowns,omitempty"`
    StandardDowns *BoxScoreTeamsSuccessRatesStandardDowns `json:"standardDowns,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

type BoxScoreTeams struct {
    CumulativePpa []BoxScoreTeamsCumulativePpa `json:"cumulativePpa,omitempty"`
    Explosiveness []BoxScoreTeamsExplosiveness `json:"explosiveness,omitempty"`
    FieldPosition []BoxScoreTeamsFieldPosition `json:"fieldPosition,omitempty"`
    Havoc []BoxScoreTeamsHavoc `json:"havoc,omitempty"`
    Ppa []BoxScoreTeamsPpa `json:"ppa,omitempty"`
    Rushing []BoxScoreTeamsRushing `json:"rushing,omitempty"`
    ScoringOpportunities []BoxScoreTeamsScoringOpportunities `json:"scoringOpportunities,omitempty"`
    SuccessRates []BoxScoreTeamsSuccessRates `json:"successRates,omitempty"`
    
}

type BoxScore struct {
    Players *BoxScorePlayers `json:"players,omitempty"`
    Teams *BoxScoreTeams `json:"teams,omitempty"`
    
}

