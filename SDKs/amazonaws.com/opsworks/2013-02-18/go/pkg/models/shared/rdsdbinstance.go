package shared

// RdsDbInstance
// Describes an Amazon RDS instance.
type RdsDbInstance struct {
	Address              *string `json:"Address,omitempty"`
	DbInstanceIdentifier *string `json:"DbInstanceIdentifier,omitempty"`
	DbPassword           *string `json:"DbPassword,omitempty"`
	DbUser               *string `json:"DbUser,omitempty"`
	Engine               *string `json:"Engine,omitempty"`
	MissingOnRds         *bool   `json:"MissingOnRds,omitempty"`
	RdsDbInstanceArn     *string `json:"RdsDbInstanceArn,omitempty"`
	Region               *string `json:"Region,omitempty"`
	StackID              *string `json:"StackId,omitempty"`
}
