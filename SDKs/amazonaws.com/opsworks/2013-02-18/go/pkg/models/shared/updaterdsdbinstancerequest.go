package shared



type UpdateRdsDbInstanceRequest struct {
    DbPassword *string `json:"DbPassword,omitempty"`
    DbUser *string `json:"DbUser,omitempty"`
    RdsDbInstanceArn string `json:"RdsDbInstanceArn"`
    
}

