package shared

type Relationship struct {
	Ids  []string              `json:"Ids"`
	Type *RelationshipTypeEnum `json:"Type"`
}
