package shared

import (
	"time"
)

type BigOvenModelAPIRecipe struct {
	ActiveMinutes        *int32                        `json:"ActiveMinutes,omitempty"`
	AdTags               *string                       `json:"AdTags,omitempty"`
	AdminBoost           *int32                        `json:"AdminBoost,omitempty"`
	AllCategoriesText    *string                       `json:"AllCategoriesText,omitempty"`
	BookmarkImageURL     *string                       `json:"BookmarkImageURL,omitempty"`
	BookmarkSiteLogo     *string                       `json:"BookmarkSiteLogo,omitempty"`
	BookmarkURL          *string                       `json:"BookmarkURL,omitempty"`
	Category             *string                       `json:"Category,omitempty"`
	Collection           *string                       `json:"Collection,omitempty"`
	CollectionID         *int32                        `json:"CollectionID,omitempty"`
	CreationDate         *time.Time                    `json:"CreationDate,omitempty"`
	Cuisine              *string                       `json:"Cuisine,omitempty"`
	Description          *string                       `json:"Description,omitempty"`
	FavoriteCount        *int32                        `json:"FavoriteCount,omitempty"`
	HeroPhotoURL         *string                       `json:"HeroPhotoUrl,omitempty"`
	ImageSquares         []int32                       `json:"ImageSquares,omitempty"`
	ImageURL             *string                       `json:"ImageURL,omitempty"`
	Ingredients          []BigOvenModelAPIIngredient   `json:"Ingredients,omitempty"`
	IngredientsTextBlock *string                       `json:"IngredientsTextBlock,omitempty"`
	Instructions         *string                       `json:"Instructions,omitempty"`
	IsBookmark           *bool                         `json:"IsBookmark,omitempty"`
	IsPrivate            *bool                         `json:"IsPrivate,omitempty"`
	IsRecipeScan         *bool                         `json:"IsRecipeScan,omitempty"`
	IsSponsored          *bool                         `json:"IsSponsored,omitempty"`
	LastModified         *time.Time                    `json:"LastModified,omitempty"`
	MaxImageSquare       *int32                        `json:"MaxImageSquare,omitempty"`
	MedalCount           *int32                        `json:"MedalCount,omitempty"`
	MenuCount            *int32                        `json:"MenuCount,omitempty"`
	Microcategory        *string                       `json:"Microcategory,omitempty"`
	NotesCount           *int32                        `json:"NotesCount,omitempty"`
	NutritionInfo        *BigOvenModelAPINutritionInfo `json:"NutritionInfo,omitempty"`
	Poster               *BigOvenModelAPIUserInfo      `json:"Poster,omitempty"`
	PrimaryIngredient    *string                       `json:"PrimaryIngredient,omitempty"`
	RecipeID             *int32                        `json:"RecipeID,omitempty"`
	ReviewCount          *int32                        `json:"ReviewCount,omitempty"`
	StarRating           *float64                      `json:"StarRating,omitempty"`
	Subcategory          *string                       `json:"Subcategory,omitempty"`
	Title                *string                       `json:"Title,omitempty"`
	TotalMinutes         *int32                        `json:"TotalMinutes,omitempty"`
	VariantOfRecipeID    *int32                        `json:"VariantOfRecipeID,omitempty"`
	VerifiedByClass      *string                       `json:"VerifiedByClass,omitempty"`
	VerifiedDateTime     *time.Time                    `json:"VerifiedDateTime,omitempty"`
	WebURL               *string                       `json:"WebURL,omitempty"`
	YieldNumber          *float64                      `json:"YieldNumber,omitempty"`
	YieldUnit            *string                       `json:"YieldUnit,omitempty"`
}
