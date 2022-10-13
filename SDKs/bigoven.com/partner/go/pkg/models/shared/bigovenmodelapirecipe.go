package shared

import (
	"time"
)

type BigOvenModelAPIRecipe struct {
	ActiveMinutes        *int32                        `json:"ActiveMinutes"`
	AdTags               *string                       `json:"AdTags"`
	AdminBoost           *int32                        `json:"AdminBoost"`
	AllCategoriesText    *string                       `json:"AllCategoriesText"`
	BookmarkImageURL     *string                       `json:"BookmarkImageURL"`
	BookmarkSiteLogo     *string                       `json:"BookmarkSiteLogo"`
	BookmarkURL          *string                       `json:"BookmarkURL"`
	Category             *string                       `json:"Category"`
	Collection           *string                       `json:"Collection"`
	CollectionID         *int32                        `json:"CollectionID"`
	CreationDate         *time.Time                    `json:"CreationDate"`
	Cuisine              *string                       `json:"Cuisine"`
	Description          *string                       `json:"Description"`
	FavoriteCount        *int32                        `json:"FavoriteCount"`
	HeroPhotoURL         *string                       `json:"HeroPhotoUrl"`
	ImageSquares         []int32                       `json:"ImageSquares"`
	ImageURL             *string                       `json:"ImageURL"`
	Ingredients          []BigOvenModelAPIIngredient   `json:"Ingredients"`
	IngredientsTextBlock *string                       `json:"IngredientsTextBlock"`
	Instructions         *string                       `json:"Instructions"`
	IsBookmark           *bool                         `json:"IsBookmark"`
	IsPrivate            *bool                         `json:"IsPrivate"`
	IsRecipeScan         *bool                         `json:"IsRecipeScan"`
	IsSponsored          *bool                         `json:"IsSponsored"`
	LastModified         *time.Time                    `json:"LastModified"`
	MaxImageSquare       *int32                        `json:"MaxImageSquare"`
	MedalCount           *int32                        `json:"MedalCount"`
	MenuCount            *int32                        `json:"MenuCount"`
	Microcategory        *string                       `json:"Microcategory"`
	NotesCount           *int32                        `json:"NotesCount"`
	NutritionInfo        *BigOvenModelAPINutritionInfo `json:"NutritionInfo"`
	Poster               *BigOvenModelAPIUserInfo      `json:"Poster"`
	PrimaryIngredient    *string                       `json:"PrimaryIngredient"`
	RecipeID             *int32                        `json:"RecipeID"`
	ReviewCount          *int32                        `json:"ReviewCount"`
	StarRating           *float64                      `json:"StarRating"`
	Subcategory          *string                       `json:"Subcategory"`
	Title                *string                       `json:"Title"`
	TotalMinutes         *int32                        `json:"TotalMinutes"`
	VariantOfRecipeID    *int32                        `json:"VariantOfRecipeID"`
	VerifiedByClass      *string                       `json:"VerifiedByClass"`
	VerifiedDateTime     *time.Time                    `json:"VerifiedDateTime"`
	WebURL               *string                       `json:"WebURL"`
	YieldNumber          *float64                      `json:"YieldNumber"`
	YieldUnit            *string                       `json:"YieldUnit"`
}
