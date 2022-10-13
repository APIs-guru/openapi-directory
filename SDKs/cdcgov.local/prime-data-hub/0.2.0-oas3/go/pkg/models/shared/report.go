package shared

type Report struct {
	DestinationCount *int64        `json:"destinationCount"`
	Destinations     []Destination `json:"destinations"`
	ErrorCount       *int64        `json:"errorCount"`
	Errors           []Detail      `json:"errors"`
	ID               string        `json:"id"`
	ReportItemCount  *int64        `json:"reportItemCount"`
	Routing          []ItemRouting `json:"routing"`
	Timestamp        *string       `json:"timestamp"`
	Topic            *string       `json:"topic"`
	WarningCount     *int64        `json:"warningCount"`
	Warnings         []Detail      `json:"warnings"`
}
