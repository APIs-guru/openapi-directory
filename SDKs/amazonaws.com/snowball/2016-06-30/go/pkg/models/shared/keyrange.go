package shared

// KeyRange
// Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
type KeyRange struct {
	BeginMarker *string `json:"BeginMarker,omitempty"`
	EndMarker   *string `json:"EndMarker,omitempty"`
}
