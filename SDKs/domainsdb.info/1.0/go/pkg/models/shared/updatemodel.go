package shared



type UpdateModel struct {
    Added *string `json:"added,omitempty"`
    AddedDownload *string `json:"added_download,omitempty"`
    Date *string `json:"date,omitempty"`
    Deleted *string `json:"deleted,omitempty"`
    DeletedDownload *string `json:"deleted_download,omitempty"`
    
}

