package shared

type TransportDescriptor struct {
	Protocol string
	Security interface{}
	Type     string
	Version  string
}
