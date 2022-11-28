package shared

// ServiceDescriptor
// 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
type ServiceDescriptor struct {
	SerCategory         *interface{}
	SerName             string
	TransportsSupported *TransportsSupported
	Version             string
}
