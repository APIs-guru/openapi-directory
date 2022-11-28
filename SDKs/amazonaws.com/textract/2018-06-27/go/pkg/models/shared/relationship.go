package shared

// Relationship
// <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
type Relationship struct {
	Ids  []string              `json:"Ids,omitempty"`
	Type *RelationshipTypeEnum `json:"Type,omitempty"`
}
