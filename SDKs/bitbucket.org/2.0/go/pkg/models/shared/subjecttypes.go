package shared

type SubjectTypesRepositoryEventsLink struct {
	Href *string `json:"href"`
	Name *string `json:"name"`
}

type SubjectTypesRepository struct {
	Events *SubjectTypesRepositoryEventsLink `json:"events"`
}

type SubjectTypesTeamEventsLink struct {
	Href *string `json:"href"`
	Name *string `json:"name"`
}

type SubjectTypesTeam struct {
	Events *SubjectTypesTeamEventsLink `json:"events"`
}

type SubjectTypesUserEventsLink struct {
	Href *string `json:"href"`
	Name *string `json:"name"`
}

type SubjectTypesUser struct {
	Events *SubjectTypesUserEventsLink `json:"events"`
}

type SubjectTypes struct {
	Repository *SubjectTypesRepository `json:"repository"`
	Team       *SubjectTypesTeam       `json:"team"`
	User       *SubjectTypesUser       `json:"user"`
}
