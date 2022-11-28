package shared

// LabelingJobDataAttributes
// Attributes of the data specified by the customer. Use these to describe the data to be labeled.
type LabelingJobDataAttributes struct {
	ContentClassifiers []ContentClassifierEnum `json:"ContentClassifiers,omitempty"`
}
