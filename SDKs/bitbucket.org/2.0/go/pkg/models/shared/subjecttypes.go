package shared

// SubjectTypesRepositoryLink
// A link to a resource related to this object.
type SubjectTypesRepositoryLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesRepository struct {
	Events *SubjectTypesRepositoryLink `json:"events,omitempty"`
}

// SubjectTypesTeamLink
// A link to a resource related to this object.
type SubjectTypesTeamLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesTeam struct {
	Events *SubjectTypesTeamLink `json:"events,omitempty"`
}

// SubjectTypesUserLink
// A link to a resource related to this object.
type SubjectTypesUserLink struct {
	Href *string `json:"href,omitempty"`
	Name *string `json:"name,omitempty"`
}

type SubjectTypesUser struct {
	Events *SubjectTypesUserLink `json:"events,omitempty"`
}

// SubjectTypes
// The mapping of resource/subject types pointing to their individual event types.
type SubjectTypes struct {
	Repository *SubjectTypesRepository `json:"repository,omitempty"`
	Team       *SubjectTypesTeam       `json:"team,omitempty"`
	User       *SubjectTypesUser       `json:"user,omitempty"`
}
