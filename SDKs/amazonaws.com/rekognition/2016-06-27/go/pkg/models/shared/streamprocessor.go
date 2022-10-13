package shared

type StreamProcessor struct {
	Name   *string                    `json:"Name"`
	Status *StreamProcessorStatusEnum `json:"Status"`
}
