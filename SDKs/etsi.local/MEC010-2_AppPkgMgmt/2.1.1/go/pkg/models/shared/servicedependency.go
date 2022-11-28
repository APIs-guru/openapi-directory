package shared

type ServiceDependency struct {
	RequestedPermissions     []string
	SerCategory              *interface{}
	SerName                  string
	SerTransportDependencies []TransportDependency
	Version                  string
}
