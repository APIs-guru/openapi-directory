package shared

type UpdateRdsDbInstanceRequest struct {
	DbPassword       *string `json:"DbPassword"`
	DbUser           *string `json:"DbUser"`
	RdsDbInstanceArn string  `json:"RdsDbInstanceArn"`
}
