package shared

// ApplicationReportingSettings
// Settings controlling the behavior of application reports.
type ApplicationReportingSettings struct {
	IncludeRemovedApps *bool `json:"includeRemovedApps,omitempty"`
}
