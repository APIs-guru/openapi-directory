package shared

type RowDimensions struct {
	PublisherIdentifier *string       `json:"publisherIdentifier"`
	TimeInterval        *TimeInterval `json:"timeInterval"`
}
