package operations




type GetDirectoryItemsJSONAscEnum string

const (
    GetDirectoryItemsJSONAscEnumTrue GetDirectoryItemsJSONAscEnum = "true"
)



type GetDirectoryItemsJSONOrderEnum string

const (
    GetDirectoryItemsJSONOrderEnumLikesReceived GetDirectoryItemsJSONOrderEnum = "likes_received"
GetDirectoryItemsJSONOrderEnumLikesGiven GetDirectoryItemsJSONOrderEnum = "likes_given"
GetDirectoryItemsJSONOrderEnumTopicCount GetDirectoryItemsJSONOrderEnum = "topic_count"
GetDirectoryItemsJSONOrderEnumPostCount GetDirectoryItemsJSONOrderEnum = "post_count"
GetDirectoryItemsJSONOrderEnumTopicsEntered GetDirectoryItemsJSONOrderEnum = "topics_entered"
GetDirectoryItemsJSONOrderEnumPostsRead GetDirectoryItemsJSONOrderEnum = "posts_read"
GetDirectoryItemsJSONOrderEnumDaysVisited GetDirectoryItemsJSONOrderEnum = "days_visited"
)



type GetDirectoryItemsJSONPeriodEnum string

const (
    GetDirectoryItemsJSONPeriodEnumDaily GetDirectoryItemsJSONPeriodEnum = "daily"
GetDirectoryItemsJSONPeriodEnumWeekly GetDirectoryItemsJSONPeriodEnum = "weekly"
GetDirectoryItemsJSONPeriodEnumMonthly GetDirectoryItemsJSONPeriodEnum = "monthly"
GetDirectoryItemsJSONPeriodEnumQuarterly GetDirectoryItemsJSONPeriodEnum = "quarterly"
GetDirectoryItemsJSONPeriodEnumYearly GetDirectoryItemsJSONPeriodEnum = "yearly"
GetDirectoryItemsJSONPeriodEnumAll GetDirectoryItemsJSONPeriodEnum = "all"
)


type GetDirectoryItemsJSONQueryParams struct {
    Asc *GetDirectoryItemsJSONAscEnum `queryParam:"style=form,explode=true,name=asc"`
    Order GetDirectoryItemsJSONOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Period GetDirectoryItemsJSONPeriodEnum `queryParam:"style=form,explode=true,name=period"`
    
}

type GetDirectoryItemsJSONRequest struct {
    QueryParams GetDirectoryItemsJSONQueryParams 
    
}

type GetDirectoryItemsJSONResponse struct {
    ContentType string 
    GetDirectoryItemsJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

