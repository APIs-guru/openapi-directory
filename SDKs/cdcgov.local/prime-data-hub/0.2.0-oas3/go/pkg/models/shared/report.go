package shared

type Report struct {
	DestinationCount *int64        `json:"destinationCount,omitempty"`
	Destinations     []Destination `json:"destinations,omitempty"`
	ErrorCount       *int64        `json:"errorCount,omitempty"`
	Errors           []Detail      `json:"errors,omitempty"`
	ID               string        `json:"id"`
	ReportItemCount  *int64        `json:"reportItemCount,omitempty"`
	Routing          []ItemRouting `json:"routing,omitempty"`
	Timestamp        *string       `json:"timestamp,omitempty"`
	Topic            *string       `json:"topic,omitempty"`
	WarningCount     *int64        `json:"warningCount,omitempty"`
	Warnings         []Detail      `json:"warnings,omitempty"`
}
