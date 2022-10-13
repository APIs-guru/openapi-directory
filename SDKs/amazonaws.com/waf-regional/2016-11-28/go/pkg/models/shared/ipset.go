package shared

type IPSet struct {
	IPSetDescriptors []IPSetDescriptor `json:"IPSetDescriptors"`
	IPSetID          string            `json:"IPSetId"`
	Name             *string           `json:"Name"`
}
