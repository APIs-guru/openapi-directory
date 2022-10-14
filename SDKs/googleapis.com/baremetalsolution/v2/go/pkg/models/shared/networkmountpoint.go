package shared

type NetworkMountPoint struct {
	DefaultGateway   *bool   `json:"defaultGateway,omitempty"`
	Instance         *string `json:"instance,omitempty"`
	IPAddress        *string `json:"ipAddress,omitempty"`
	LogicalInterface *string `json:"logicalInterface,omitempty"`
}
