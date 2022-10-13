package shared

type InstanceConfig struct {
	ClientNetwork  *NetworkAddress `json:"clientNetwork"`
	Hyperthreading *bool           `json:"hyperthreading"`
	ID             *string         `json:"id"`
	InstanceType   *string         `json:"instanceType"`
	Location       *string         `json:"location"`
	OsImage        *string         `json:"osImage"`
	PrivateNetwork *NetworkAddress `json:"privateNetwork"`
	UserNote       *string         `json:"userNote"`
}
