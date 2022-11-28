package shared

// PersonDetection
// <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
type PersonDetection struct {
	Person    *PersonDetail `json:"Person,omitempty"`
	Timestamp *int64        `json:"Timestamp,omitempty"`
}
