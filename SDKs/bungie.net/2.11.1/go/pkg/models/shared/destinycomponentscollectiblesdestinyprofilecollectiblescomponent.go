package shared

type DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent struct {
	Collectibles                     map[string]DestinyComponentsCollectiblesDestinyCollectibleComponent
	CollectionBadgesRootNodeHash     *int64
	CollectionCategoriesRootNodeHash *int64
	NewnessFlaggedCollectibleHashes  []int64
	RecentCollectibleHashes          []int64
}
