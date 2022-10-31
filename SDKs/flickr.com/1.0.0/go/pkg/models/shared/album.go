package shared



type Album struct {
    CanComment *bool `json:"can_comment,omitempty"`
    CountComments *float64 `json:"count_comments,omitempty"`
    CountViews *float64 `json:"count_views,omitempty"`
    DateCreate *float64 `json:"date_create,omitempty"`
    DateUpdate *float64 `json:"date_update,omitempty"`
    Description *string `json:"description,omitempty"`
    Farm *string `json:"farm,omitempty"`
    ID *string `json:"id,omitempty"`
    Photos *float64 `json:"photos,omitempty"`
    Primary *string `json:"primary,omitempty"`
    Secret *string `json:"secret,omitempty"`
    Server *string `json:"server,omitempty"`
    Title *string `json:"title,omitempty"`
    Videos *float64 `json:"videos,omitempty"`
    
}

