package shared

type TrendingTrendingDetail struct {
	Creation        *TrendingTrendingEntryCommunityCreation
	DestinyActivity *TrendingTrendingEntryDestinyActivity
	DestinyItem     *TrendingTrendingEntryDestinyItem
	DestinyRitual   *TrendingTrendingEntryDestinyRitual
	EntityType      *int32
	Identifier      *string
	News            *TrendingTrendingEntryNews
	Support         *TrendingTrendingEntrySupportArticle
}
