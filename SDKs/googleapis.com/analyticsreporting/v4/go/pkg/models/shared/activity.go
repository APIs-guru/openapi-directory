package shared

type ActivityActivityTypeEnum string

const (
	ActivityActivityTypeEnumActivityTypeUnspecified ActivityActivityTypeEnum = "ACTIVITY_TYPE_UNSPECIFIED"
	ActivityActivityTypeEnumPageview                ActivityActivityTypeEnum = "PAGEVIEW"
	ActivityActivityTypeEnumScreenview              ActivityActivityTypeEnum = "SCREENVIEW"
	ActivityActivityTypeEnumGoal                    ActivityActivityTypeEnum = "GOAL"
	ActivityActivityTypeEnumEcommerce               ActivityActivityTypeEnum = "ECOMMERCE"
	ActivityActivityTypeEnumEvent                   ActivityActivityTypeEnum = "EVENT"
)

type Activity struct {
	ActivityTime    *string                   `json:"activityTime"`
	ActivityType    *ActivityActivityTypeEnum `json:"activityType"`
	Appview         *ScreenviewData           `json:"appview"`
	Campaign        *string                   `json:"campaign"`
	ChannelGrouping *string                   `json:"channelGrouping"`
	CustomDimension []CustomDimension         `json:"customDimension"`
	Ecommerce       *EcommerceData            `json:"ecommerce"`
	Event           *EventData                `json:"event"`
	Goals           *GoalSetData              `json:"goals"`
	Hostname        *string                   `json:"hostname"`
	Keyword         *string                   `json:"keyword"`
	LandingPagePath *string                   `json:"landingPagePath"`
	Medium          *string                   `json:"medium"`
	Pageview        *PageviewData             `json:"pageview"`
	Source          *string                   `json:"source"`
}
