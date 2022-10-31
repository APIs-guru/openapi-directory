package operations




type GetGlobalwinescoresLatestColorEnum string

const (
    GetGlobalwinescoresLatestColorEnumRed GetGlobalwinescoresLatestColorEnum = "red"
GetGlobalwinescoresLatestColorEnumWhite GetGlobalwinescoresLatestColorEnum = "white"
GetGlobalwinescoresLatestColorEnumPink GetGlobalwinescoresLatestColorEnum = "pink"
)



type GetGlobalwinescoresLatestOrderingEnum string

const (
    GetGlobalwinescoresLatestOrderingEnumDate GetGlobalwinescoresLatestOrderingEnum = "date"
GetGlobalwinescoresLatestOrderingEnumMinusDate GetGlobalwinescoresLatestOrderingEnum = "-date"
GetGlobalwinescoresLatestOrderingEnumScore GetGlobalwinescoresLatestOrderingEnum = "score"
GetGlobalwinescoresLatestOrderingEnumMinusScore GetGlobalwinescoresLatestOrderingEnum = "-score"
)


type GetGlobalwinescoresLatestQueryParams struct {
    Color *GetGlobalwinescoresLatestColorEnum `queryParam:"style=form,explode=true,name=color"`
    IsPrimeurs *bool `queryParam:"style=form,explode=true,name=is_primeurs"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Lwin *string `queryParam:"style=form,explode=true,name=lwin"`
    Lwin11 *string `queryParam:"style=form,explode=true,name=lwin_11"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Ordering *GetGlobalwinescoresLatestOrderingEnum `queryParam:"style=form,explode=true,name=ordering"`
    Vintage *string `queryParam:"style=form,explode=true,name=vintage"`
    WineID []int64 `queryParam:"style=form,explode=true,name=wine_id"`
    
}

type GetGlobalwinescoresLatestHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetGlobalwinescoresLatestRequest struct {
    QueryParams GetGlobalwinescoresLatestQueryParams 
    Headers GetGlobalwinescoresLatestHeaders 
    
}

type GetGlobalwinescoresLatestResponse struct {
    ContentType string 
    StatusCode int64 
    
}

