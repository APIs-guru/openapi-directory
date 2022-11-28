package shared

import (
	"time"
)

type BigOvenModelAPIRecipeInfoInput struct {
	BookmarkURL          *string                       `json:"BookmarkURL,omitempty"`
	Category             *string                       `json:"Category,omitempty"`
	CreationDate         *time.Time                    `json:"CreationDate,omitempty"`
	Cuisine              *string                       `json:"Cuisine,omitempty"`
	HasVideos            *bool                         `json:"HasVideos,omitempty"`
	HeroPhotoURL         *string                       `json:"HeroPhotoUrl,omitempty"`
	HideFromPublicSearch *bool                         `json:"HideFromPublicSearch,omitempty"`
	ImageURL             *string                       `json:"ImageURL,omitempty"`
	ImageUrl120          *string                       `json:"ImageURL120,omitempty"`
	IsBookmark           *bool                         `json:"IsBookmark,omitempty"`
	IsPrivate            *bool                         `json:"IsPrivate,omitempty"`
	MaxImageSquare       *int32                        `json:"MaxImageSquare,omitempty"`
	Microcategory        *string                       `json:"Microcategory,omitempty"`
	Poster               *BigOvenModelAPIUserInfoInput `json:"Poster,omitempty"`
	QualityScore         *float64                      `json:"QualityScore,omitempty"`
	RecipeID             *int32                        `json:"RecipeID,omitempty"`
	ReviewCount          *int32                        `json:"ReviewCount,omitempty"`
	StarRating           *float64                      `json:"StarRating,omitempty"`
	StarRatingImg        *string                       `json:"StarRatingIMG,omitempty"`
	Subcategory          *string                       `json:"Subcategory,omitempty"`
	Title                *string                       `json:"Title,omitempty"`
	TotalTries           *int32                        `json:"TotalTries,omitempty"`
	WebURL               *string                       `json:"WebURL,omitempty"`
	YieldNumber          *float64                      `json:"YieldNumber,omitempty"`
}
