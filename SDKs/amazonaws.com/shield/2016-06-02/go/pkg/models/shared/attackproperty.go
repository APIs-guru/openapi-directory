package shared

// AttackProperty
// Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
type AttackProperty struct {
	AttackLayer              *AttackLayerEnum              `json:"AttackLayer,omitempty"`
	AttackPropertyIdentifier *AttackPropertyIdentifierEnum `json:"AttackPropertyIdentifier,omitempty"`
	TopContributors          []Contributor                 `json:"TopContributors,omitempty"`
	Total                    *int64                        `json:"Total,omitempty"`
	Unit                     *UnitEnum                     `json:"Unit,omitempty"`
}
