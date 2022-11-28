package shared

// AgeRange
// <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p>
type AgeRange struct {
	High *int64 `json:"High,omitempty"`
	Low  *int64 `json:"Low,omitempty"`
}
