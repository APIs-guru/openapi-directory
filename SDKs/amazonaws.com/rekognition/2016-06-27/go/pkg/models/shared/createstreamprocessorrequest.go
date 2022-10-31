package shared

type CreateStreamProcessorRequest struct {
	Input    StreamProcessorInput    `json:"Input"`
	Name     string                  `json:"Name"`
	Output   StreamProcessorOutput   `json:"Output"`
	RoleArn  string                  `json:"RoleArn"`
	Settings StreamProcessorSettings `json:"Settings"`
	Tags     map[string]string       `json:"Tags,omitempty"`
}
