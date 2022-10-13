package shared

type NetworkMountPoint struct {
	DefaultGateway   *bool   `json:"defaultGateway"`
	Instance         *string `json:"instance"`
	IPAddress        *string `json:"ipAddress"`
	LogicalInterface *string `json:"logicalInterface"`
}
