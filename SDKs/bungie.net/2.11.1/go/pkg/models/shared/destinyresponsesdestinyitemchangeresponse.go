package shared

type DestinyResponsesDestinyItemChangeResponse struct {
	AddedInventoryItems   []DestinyEntitiesItemsDestinyItemComponent
	Item                  *DestinyResponsesDestinyItemResponse
	RemovedInventoryItems []DestinyEntitiesItemsDestinyItemComponent
}
