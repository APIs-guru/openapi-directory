package shared

// AppValidationOutput
// Output from validating an application.
type AppValidationOutput struct {
	SsmOutput *SsmOutput `json:"ssmOutput,omitempty"`
}
