package shared



type SubjectTypesRepositoryLink struct {
    Href *string `json:"href,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type SubjectTypesRepository struct {
    Events *SubjectTypesRepositoryLink `json:"events,omitempty"`
    
}

type SubjectTypesTeamLink struct {
    Href *string `json:"href,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type SubjectTypesTeam struct {
    Events *SubjectTypesTeamLink `json:"events,omitempty"`
    
}

type SubjectTypesUserLink struct {
    Href *string `json:"href,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type SubjectTypesUser struct {
    Events *SubjectTypesUserLink `json:"events,omitempty"`
    
}

type SubjectTypes struct {
    Repository *SubjectTypesRepository `json:"repository,omitempty"`
    Team *SubjectTypesTeam `json:"team,omitempty"`
    User *SubjectTypesUser `json:"user,omitempty"`
    
}

