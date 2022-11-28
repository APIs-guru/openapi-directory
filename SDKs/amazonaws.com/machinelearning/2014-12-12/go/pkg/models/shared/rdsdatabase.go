package shared

// RdsDatabase
// The database details of an Amazon RDS database.
type RdsDatabase struct {
	DatabaseName       string `json:"DatabaseName"`
	InstanceIdentifier string `json:"InstanceIdentifier"`
}
