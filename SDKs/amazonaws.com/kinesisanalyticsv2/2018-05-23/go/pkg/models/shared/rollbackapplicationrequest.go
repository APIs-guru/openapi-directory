package shared



type RollbackApplicationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    CurrentApplicationVersionID int64 `json:"CurrentApplicationVersionId"`
    
}

