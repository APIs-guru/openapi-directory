package shared

// InputConfiguration
// When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
type InputConfiguration struct {
	ID                                 string                             `json:"Id"`
	InputStartingPositionConfiguration InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration"`
}
