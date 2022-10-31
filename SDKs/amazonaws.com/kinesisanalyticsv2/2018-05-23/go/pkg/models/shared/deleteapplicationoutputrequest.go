package shared



type DeleteApplicationOutputRequest struct {
    ApplicationName string `json:"ApplicationName"`
    CurrentApplicationVersionID int64 `json:"CurrentApplicationVersionId"`
    OutputID string `json:"OutputId"`
    
}

