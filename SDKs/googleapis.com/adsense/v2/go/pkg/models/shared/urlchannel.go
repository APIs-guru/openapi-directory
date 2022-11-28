package shared

// URLChannel
// Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
type URLChannel struct {
	Name                 *string `json:"name,omitempty"`
	ReportingDimensionID *string `json:"reportingDimensionId,omitempty"`
	URIPattern           *string `json:"uriPattern,omitempty"`
}
