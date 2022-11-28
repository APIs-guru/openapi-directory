package shared

// DataProvider
// Contains details of the data provider.
type DataProvider struct {
	Name           *string `json:"name,omitempty"`
	PrimaryContact *string `json:"primaryContact,omitempty"`
}
