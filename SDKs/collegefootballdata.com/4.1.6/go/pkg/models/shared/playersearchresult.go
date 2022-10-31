package shared



type PlayerSearchResult struct {
    FirstName *string `json:"firstName,omitempty"`
    Height *int64 `json:"height,omitempty"`
    Hometown *string `json:"hometown,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Jersey *int64 `json:"jersey,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Name *string `json:"name,omitempty"`
    Position *string `json:"position,omitempty"`
    Team *string `json:"team,omitempty"`
    TeamColor *string `json:"teamColor,omitempty"`
    TeamColorSecondary *string `json:"teamColorSecondary,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

