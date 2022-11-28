package shared

// RelatedItem
// Resources that responders use to triage and mitigate the incident.
type RelatedItem struct {
	Identifier ItemIdentifier `json:"identifier"`
	Title      *string        `json:"title,omitempty"`
}
