package shared

type RdsDbInstance struct {
	Address              *string `json:"Address"`
	DbInstanceIdentifier *string `json:"DbInstanceIdentifier"`
	DbPassword           *string `json:"DbPassword"`
	DbUser               *string `json:"DbUser"`
	Engine               *string `json:"Engine"`
	MissingOnRds         *bool   `json:"MissingOnRds"`
	RdsDbInstanceArn     *string `json:"RdsDbInstanceArn"`
	Region               *string `json:"Region"`
	StackID              *string `json:"StackId"`
}
