package shared

import (
"time")

type BigOvenModelApi2RecipeInfox struct {
    Category *string `json:"Category,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Cuisine *string `json:"Cuisine,omitempty"`
    HasVideos *bool `json:"HasVideos,omitempty"`
    IsBookmark *bool `json:"IsBookmark,omitempty"`
    IsPrivate *bool `json:"IsPrivate,omitempty"`
    IsRecipeScan *bool `json:"IsRecipeScan,omitempty"`
    Microcategory *string `json:"Microcategory,omitempty"`
    PhotoURL *string `json:"PhotoUrl,omitempty"`
    Poster *BigOvenModelApi2UserInfoTinyx `json:"Poster,omitempty"`
    RecipeID *int32 `json:"RecipeID,omitempty"`
    ReviewCount *int32 `json:"ReviewCount,omitempty"`
    Servings *float64 `json:"Servings,omitempty"`
    StarRating *float64 `json:"StarRating,omitempty"`
    Subcategory *string `json:"Subcategory,omitempty"`
    Title *string `json:"Title,omitempty"`
    TotalTries *int32 `json:"TotalTries,omitempty"`
    WebURL *string `json:"WebURL,omitempty"`
    
}

