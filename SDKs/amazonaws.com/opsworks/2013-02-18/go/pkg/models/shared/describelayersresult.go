package shared

// DescribeLayersResult
// Contains the response to a <code>DescribeLayers</code> request.
type DescribeLayersResult struct {
	Layers []Layer `json:"Layers,omitempty"`
}
