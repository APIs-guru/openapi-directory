package shared

type SubjectTypesRepositoryEventsLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesRepository struct {
	Events *SubjectTypesRepositoryEventsLink `json:"events,omitempty"`
}

type SubjectTypesTeamEventsLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesTeam struct {
	Events *SubjectTypesTeamEventsLink `json:"events,omitempty"`
}

type SubjectTypesUserEventsLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesUser struct {
	Events *SubjectTypesUserEventsLink `json:"events,omitempty"`
}

type SubjectTypes struct {
	Repository *SubjectTypesRepository `json:"repository,omitempty"`
	Team       *SubjectTypesTeam       `json:"team,omitempty"`
	User       *SubjectTypesUser       `json:"user,omitempty"`
}
