package shared

type IPSetDescriptor struct {
	Type  IPSetDescriptorTypeEnum `json:"Type"`
	Value string                  `json:"Value"`
}
