package shared



type CopyStepDetails struct {
    DestinationFileLocation *InputFileLocation `json:"DestinationFileLocation,omitempty"`
    Name *string `json:"Name,omitempty"`
    OverwriteExisting *OverwriteExistingEnum `json:"OverwriteExisting,omitempty"`
    
}

