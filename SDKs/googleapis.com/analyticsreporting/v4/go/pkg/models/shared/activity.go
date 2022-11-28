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

// Activity
// An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
type Activity struct {
	ActivityTime    *string                   `json:"activityTime,omitempty"`
	ActivityType    *ActivityActivityTypeEnum `json:"activityType,omitempty"`
	Appview         *ScreenviewData           `json:"appview,omitempty"`
	Campaign        *string                   `json:"campaign,omitempty"`
	ChannelGrouping *string                   `json:"channelGrouping,omitempty"`
	CustomDimension []CustomDimension         `json:"customDimension,omitempty"`
	Ecommerce       *EcommerceData            `json:"ecommerce,omitempty"`
	Event           *EventData                `json:"event,omitempty"`
	Goals           *GoalSetData              `json:"goals,omitempty"`
	Hostname        *string                   `json:"hostname,omitempty"`
	Keyword         *string                   `json:"keyword,omitempty"`
	LandingPagePath *string                   `json:"landingPagePath,omitempty"`
	Medium          *string                   `json:"medium,omitempty"`
	Pageview        *PageviewData             `json:"pageview,omitempty"`
	Source          *string                   `json:"source,omitempty"`
}
