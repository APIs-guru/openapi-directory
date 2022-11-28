package shared

// AdReferences
// This type is a container for a list of ad IDs and their associated URIs.
type AdReferences struct {
	Ads []AdReference `json:"ads,omitempty"`
}
