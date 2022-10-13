package shared

import (
	"time"
)

type BigOvenModelApi2RecipeInfox struct {
	Category      *string                        `json:"Category"`
	CreationDate  *time.Time                     `json:"CreationDate"`
	Cuisine       *string                        `json:"Cuisine"`
	HasVideos     *bool                          `json:"HasVideos"`
	IsBookmark    *bool                          `json:"IsBookmark"`
	IsPrivate     *bool                          `json:"IsPrivate"`
	IsRecipeScan  *bool                          `json:"IsRecipeScan"`
	Microcategory *string                        `json:"Microcategory"`
	PhotoURL      *string                        `json:"PhotoUrl"`
	Poster        *BigOvenModelApi2UserInfoTinyx `json:"Poster"`
	RecipeID      *int32                         `json:"RecipeID"`
	ReviewCount   *int32                         `json:"ReviewCount"`
	Servings      *float64                       `json:"Servings"`
	StarRating    *float64                       `json:"StarRating"`
	Subcategory   *string                        `json:"Subcategory"`
	Title         *string                        `json:"Title"`
	TotalTries    *int32                         `json:"TotalTries"`
	WebURL        *string                        `json:"WebURL"`
}
