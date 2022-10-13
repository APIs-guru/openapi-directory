package shared

type ColumnDescription struct {
	DataType                 *string              `json:"dataType"`
	DateDetails              *DateDetails         `json:"dateDetails"`
	ID                       *string              `json:"id"`
	Labels                   []LabeledItem        `json:"labels"`
	LookupDetails            *LookupDetails       `json:"lookupDetails"`
	MultipleValuesDisallowed *bool                `json:"multipleValuesDisallowed"`
	Name                     *string              `json:"name"`
	Readonly                 *bool                `json:"readonly"`
	RelationshipDetails      *RelationshipDetails `json:"relationshipDetails"`
}
