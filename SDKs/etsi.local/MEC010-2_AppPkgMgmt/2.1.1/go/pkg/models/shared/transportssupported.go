package shared

// TransportsSupported
// 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
type TransportsSupported struct {
	Serializers []string
	Transport   *TransportDescriptor
}
