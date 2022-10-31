package shared




type SearchUserActivityRequestActivityTypesEnum string

const (
    SearchUserActivityRequestActivityTypesEnumActivityTypeUnspecified SearchUserActivityRequestActivityTypesEnum = "ACTIVITY_TYPE_UNSPECIFIED"
SearchUserActivityRequestActivityTypesEnumPageview SearchUserActivityRequestActivityTypesEnum = "PAGEVIEW"
SearchUserActivityRequestActivityTypesEnumScreenview SearchUserActivityRequestActivityTypesEnum = "SCREENVIEW"
SearchUserActivityRequestActivityTypesEnumGoal SearchUserActivityRequestActivityTypesEnum = "GOAL"
SearchUserActivityRequestActivityTypesEnumEcommerce SearchUserActivityRequestActivityTypesEnum = "ECOMMERCE"
SearchUserActivityRequestActivityTypesEnumEvent SearchUserActivityRequestActivityTypesEnum = "EVENT"
)


type SearchUserActivityRequest struct {
    ActivityTypes []SearchUserActivityRequestActivityTypesEnum `json:"activityTypes,omitempty"`
    DateRange *DateRange `json:"dateRange,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    User *User `json:"user,omitempty"`
    ViewID *string `json:"viewId,omitempty"`
    
}

