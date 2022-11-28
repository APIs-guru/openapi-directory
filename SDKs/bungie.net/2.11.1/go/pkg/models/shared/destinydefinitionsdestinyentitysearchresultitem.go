package shared

// DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
// Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
type DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties struct {
	Description   *string
	HasIcon       *bool
	HighResIcon   *string
	Icon          *string
	IconSequences []DestinyDefinitionsCommonDestinyIconSequenceDefinition
	Name          *string
}

// DestinyDefinitionsDestinyEntitySearchResultItem
// An individual Destiny Entity returned from the entity search.
type DestinyDefinitionsDestinyEntitySearchResultItem struct {
	DisplayProperties *DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
	EntityType        *string
	Hash              *int64
	Weight            *float64
}
