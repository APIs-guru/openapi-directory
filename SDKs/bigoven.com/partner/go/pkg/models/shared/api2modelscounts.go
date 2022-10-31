package shared



type Api2ModelsCounts struct {
    AddedCount *int64 `json:"AddedCount,omitempty" form:"name=AddedCount"`
    FollowersCount *int64 `json:"FollowersCount,omitempty" form:"name=FollowersCount"`
    FollowingCount *int64 `json:"FollowingCount,omitempty" form:"name=FollowingCount"`
    PrivateRecipeCount *int64 `json:"PrivateRecipeCount,omitempty" form:"name=PrivateRecipeCount"`
    PublicRecipeCount *int64 `json:"PublicRecipeCount,omitempty" form:"name=PublicRecipeCount"`
    TotalRecipes *int64 `json:"TotalRecipes,omitempty" form:"name=TotalRecipes"`
    
}

