package shared

type AttackProperty struct {
	AttackLayer              *AttackLayerEnum              `json:"AttackLayer"`
	AttackPropertyIdentifier *AttackPropertyIdentifierEnum `json:"AttackPropertyIdentifier"`
	TopContributors          []Contributor                 `json:"TopContributors"`
	Total                    *int64                        `json:"Total"`
	Unit                     *UnitEnum                     `json:"Unit"`
}
