package shared

type Api2ModelsCounts struct {
	AddedCount         *int64 `json:"AddedCount" form:"name=AddedCount"`
	FollowersCount     *int64 `json:"FollowersCount" form:"name=FollowersCount"`
	FollowingCount     *int64 `json:"FollowingCount" form:"name=FollowingCount"`
	PrivateRecipeCount *int64 `json:"PrivateRecipeCount" form:"name=PrivateRecipeCount"`
	PublicRecipeCount  *int64 `json:"PublicRecipeCount" form:"name=PublicRecipeCount"`
	TotalRecipes       *int64 `json:"TotalRecipes" form:"name=TotalRecipes"`
}
