package operations

import (
	"openapi/pkg/models/shared"
)

type RecipeRecipeSearchQueryParams struct {
	AnyKw             *string  `queryParam:"style=form,explode=true,name=any_kw"`
	Boostmine         *bool    `queryParam:"style=form,explode=true,name=boostmine"`
	Champion          *int32   `queryParam:"style=form,explode=true,name=champion"`
	Chs               *int32   `queryParam:"style=form,explode=true,name=chs"`
	Coll              *int32   `queryParam:"style=form,explode=true,name=coll"`
	Cps               *int32   `queryParam:"style=form,explode=true,name=cps"`
	Cuisine           *string  `queryParam:"style=form,explode=true,name=cuisine"`
	Db                *string  `queryParam:"style=form,explode=true,name=db"`
	Dyf               *int32   `queryParam:"style=form,explode=true,name=dyf"`
	ExcludeCat        *string  `queryParam:"style=form,explode=true,name=exclude_cat"`
	ExcludeIng        *string  `queryParam:"style=form,explode=true,name=exclude_ing"`
	ExcludePrimarycat *string  `queryParam:"style=form,explode=true,name=exclude_primarycat"`
	Filter            *string  `queryParam:"style=form,explode=true,name=filter"`
	Folder            *string  `queryParam:"style=form,explode=true,name=folder"`
	Glf               *int32   `queryParam:"style=form,explode=true,name=glf"`
	IncludeCat        *string  `queryParam:"style=form,explode=true,name=include_cat"`
	IncludeIng        *string  `queryParam:"style=form,explode=true,name=include_ing"`
	IncludePrimarycat *string  `queryParam:"style=form,explode=true,name=include_primarycat"`
	MaxIngredients    *int32   `queryParam:"style=form,explode=true,name=maxIngredients"`
	MinIngredients    *int32   `queryParam:"style=form,explode=true,name=minIngredients"`
	Ntf               *int32   `queryParam:"style=form,explode=true,name=ntf"`
	Pg                *int32   `queryParam:"style=form,explode=true,name=pg"`
	Photos            *bool    `queryParam:"style=form,explode=true,name=photos"`
	Rmf               *int32   `queryParam:"style=form,explode=true,name=rmf"`
	Rpp               *int32   `queryParam:"style=form,explode=true,name=rpp"`
	ServingsMin       *float64 `queryParam:"style=form,explode=true,name=servingsMin"`
	Sff               *int32   `queryParam:"style=form,explode=true,name=sff"`
	Slf               *int32   `queryParam:"style=form,explode=true,name=slf"`
	Synonyms          *bool    `queryParam:"style=form,explode=true,name=synonyms"`
	TitleKw           *string  `queryParam:"style=form,explode=true,name=title_kw"`
	Tnf               *int32   `queryParam:"style=form,explode=true,name=tnf"`
	Token             *string  `queryParam:"style=form,explode=true,name=token"`
	TotalMins         *int32   `queryParam:"style=form,explode=true,name=totalMins"`
	UserID            *int32   `queryParam:"style=form,explode=true,name=userId"`
	Username          *string  `queryParam:"style=form,explode=true,name=username"`
	Userset           *string  `queryParam:"style=form,explode=true,name=userset"`
	Vgn               *int32   `queryParam:"style=form,explode=true,name=vgn"`
	Vtn               *int32   `queryParam:"style=form,explode=true,name=vtn"`
	Wmf               *int32   `queryParam:"style=form,explode=true,name=wmf"`
}

type RecipeRecipeSearchRequest struct {
	QueryParams RecipeRecipeSearchQueryParams
}

type RecipeRecipeSearchResponse struct {
	BigOvenModelApi2RecipeSearchResult *shared.BigOvenModelApi2RecipeSearchResult
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
}
