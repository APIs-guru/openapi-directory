package shared

type SearchUserActivityRequestActivityTypesEnum string

const (
	SearchUserActivityRequestActivityTypesEnumActivityTypeUnspecified SearchUserActivityRequestActivityTypesEnum = "ACTIVITY_TYPE_UNSPECIFIED"
	SearchUserActivityRequestActivityTypesEnumPageview                SearchUserActivityRequestActivityTypesEnum = "PAGEVIEW"
	SearchUserActivityRequestActivityTypesEnumScreenview              SearchUserActivityRequestActivityTypesEnum = "SCREENVIEW"
	SearchUserActivityRequestActivityTypesEnumGoal                    SearchUserActivityRequestActivityTypesEnum = "GOAL"
	SearchUserActivityRequestActivityTypesEnumEcommerce               SearchUserActivityRequestActivityTypesEnum = "ECOMMERCE"
	SearchUserActivityRequestActivityTypesEnumEvent                   SearchUserActivityRequestActivityTypesEnum = "EVENT"
)

type SearchUserActivityRequest struct {
	ActivityTypes []SearchUserActivityRequestActivityTypesEnum `json:"activityTypes"`
	DateRange     *DateRange                                   `json:"dateRange"`
	PageSize      *int32                                       `json:"pageSize"`
	PageToken     *string                                      `json:"pageToken"`
	User          *User                                        `json:"user"`
	ViewID        *string                                      `json:"viewId"`
}
