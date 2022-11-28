package shared

// GoogleAnalyticsAdminV1alphaAccessDimensionHeader
// Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
type GoogleAnalyticsAdminV1alphaAccessDimensionHeader struct {
	DimensionName *string `json:"dimensionName,omitempty"`
}
