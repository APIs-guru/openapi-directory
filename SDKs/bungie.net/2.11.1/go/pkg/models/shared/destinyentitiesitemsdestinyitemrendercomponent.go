package shared

// DestinyEntitiesItemsDestinyItemRenderComponent
// Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
type DestinyEntitiesItemsDestinyItemRenderComponent struct {
	ArtRegions    map[string]int32
	UseCustomDyes *bool
}
