package shared

// CopyStepDetails
// Each step type has its own <code>StepDetails</code> structure.
type CopyStepDetails struct {
	DestinationFileLocation *InputFileLocation     `json:"DestinationFileLocation,omitempty"`
	Name                    *string                `json:"Name,omitempty"`
	OverwriteExisting       *OverwriteExistingEnum `json:"OverwriteExisting,omitempty"`
}
