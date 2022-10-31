package shared



type IssueEventProjectCard struct {
    ColumnName string `json:"column_name"`
    ID int64 `json:"id"`
    PreviousColumnName *string `json:"previous_column_name,omitempty"`
    ProjectID int64 `json:"project_id"`
    ProjectURL string `json:"project_url"`
    URL string `json:"url"`
    
}

