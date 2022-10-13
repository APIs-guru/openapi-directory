package shared

type CopyStepDetails struct {
	DestinationFileLocation *InputFileLocation     `json:"DestinationFileLocation"`
	Name                    *string                `json:"Name"`
	OverwriteExisting       *OverwriteExistingEnum `json:"OverwriteExisting"`
}
