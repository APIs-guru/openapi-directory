package shared

type TransportDependency struct {
	Labels      []string
	Serializers []string
	Transport   TransportDescriptor
}
