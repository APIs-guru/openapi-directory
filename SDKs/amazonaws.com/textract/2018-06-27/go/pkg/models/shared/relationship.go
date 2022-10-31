package shared

type Relationship struct {
	Ids  []string              `json:"Ids,omitempty"`
	Type *RelationshipTypeEnum `json:"Type,omitempty"`
}
