package shared

type Activity struct {
	Custom           *CustomMessageActivity         `json:"CUSTOM"`
	ConditionalSplit *ConditionalSplitActivity      `json:"ConditionalSplit"`
	Description      *string                        `json:"Description"`
	Email            *EmailMessageActivity          `json:"EMAIL"`
	Holdout          *HoldoutActivity               `json:"Holdout"`
	MultiCondition   *MultiConditionalSplitActivity `json:"MultiCondition"`
	Push             *PushMessageActivity           `json:"PUSH"`
	RandomSplit      *RandomSplitActivity           `json:"RandomSplit"`
	Sms              *SmsMessageActivity            `json:"SMS"`
	Wait             *WaitActivity                  `json:"Wait"`
}
