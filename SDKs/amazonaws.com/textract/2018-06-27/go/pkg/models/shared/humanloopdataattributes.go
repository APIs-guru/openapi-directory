package shared

// HumanLoopDataAttributes
// Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content.
type HumanLoopDataAttributes struct {
	ContentClassifiers []ContentClassifierEnum `json:"ContentClassifiers,omitempty"`
}
