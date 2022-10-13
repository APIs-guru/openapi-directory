package shared

type PlayerGameTeamsCategoriesTypesAthletes struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
	Stat *string `json:"stat"`
}

type PlayerGameTeamsCategoriesTypes struct {
	Athletes []PlayerGameTeamsCategoriesTypesAthletes `json:"athletes"`
	Name     *string                                  `json:"name"`
}

type PlayerGameTeamsCategories struct {
	Name  *string                          `json:"name"`
	Types []PlayerGameTeamsCategoriesTypes `json:"types"`
}

type PlayerGameTeamsSchool struct {
	Conference *string `json:"conference"`
	Name       *string `json:"name"`
}

type PlayerGameTeams struct {
	Categories []PlayerGameTeamsCategories `json:"categories"`
	HomeAway   *bool                       `json:"homeAway"`
	Points     *int64                      `json:"points"`
	School     *PlayerGameTeamsSchool      `json:"school"`
}

type PlayerGame struct {
	ID    *int64            `json:"id"`
	Teams []PlayerGameTeams `json:"teams"`
}
