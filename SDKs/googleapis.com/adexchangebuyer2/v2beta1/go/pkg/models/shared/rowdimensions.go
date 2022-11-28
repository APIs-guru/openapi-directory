package shared

// RowDimensions
// A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
type RowDimensions struct {
	PublisherIdentifier *string       `json:"publisherIdentifier,omitempty"`
	TimeInterval        *TimeInterval `json:"timeInterval,omitempty"`
}
