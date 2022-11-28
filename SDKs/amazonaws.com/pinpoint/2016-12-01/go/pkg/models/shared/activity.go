package shared

// Activity
// Specifies the configuration and other settings for an activity in a journey.
type Activity struct {
	Custom           *CustomMessageActivity         `json:"CUSTOM,omitempty"`
	ConditionalSplit *ConditionalSplitActivity      `json:"ConditionalSplit,omitempty"`
	Description      *string                        `json:"Description,omitempty"`
	Email            *EmailMessageActivity          `json:"EMAIL,omitempty"`
	Holdout          *HoldoutActivity               `json:"Holdout,omitempty"`
	MultiCondition   *MultiConditionalSplitActivity `json:"MultiCondition,omitempty"`
	Push             *PushMessageActivity           `json:"PUSH,omitempty"`
	RandomSplit      *RandomSplitActivity           `json:"RandomSplit,omitempty"`
	Sms              *SmsMessageActivity            `json:"SMS,omitempty"`
	Wait             *WaitActivity                  `json:"Wait,omitempty"`
}
