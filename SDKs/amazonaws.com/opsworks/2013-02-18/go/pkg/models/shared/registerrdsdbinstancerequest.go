package shared



type RegisterRdsDbInstanceRequest struct {
    DbPassword string `json:"DbPassword"`
    DbUser string `json:"DbUser"`
    RdsDbInstanceArn string `json:"RdsDbInstanceArn"`
    StackID string `json:"StackId"`
    
}

