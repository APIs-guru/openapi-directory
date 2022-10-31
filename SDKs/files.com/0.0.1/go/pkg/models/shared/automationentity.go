package shared

type AutomationEntityAutomationEnum string

const (
	AutomationEntityAutomationEnumCreateFolder   AutomationEntityAutomationEnum = "create_folder"
	AutomationEntityAutomationEnumRequestFile    AutomationEntityAutomationEnum = "request_file"
	AutomationEntityAutomationEnumRequestMove    AutomationEntityAutomationEnum = "request_move"
	AutomationEntityAutomationEnumCopyNewestFile AutomationEntityAutomationEnum = "copy_newest_file"
	AutomationEntityAutomationEnumDeleteFile     AutomationEntityAutomationEnum = "delete_file"
	AutomationEntityAutomationEnumCopyFile       AutomationEntityAutomationEnum = "copy_file"
	AutomationEntityAutomationEnumMoveFile       AutomationEntityAutomationEnum = "move_file"
)

type AutomationEntityTriggerEnum string

const (
	AutomationEntityTriggerEnumRealtime       AutomationEntityTriggerEnum = "realtime"
	AutomationEntityTriggerEnumDaily          AutomationEntityTriggerEnum = "daily"
	AutomationEntityTriggerEnumCustomSchedule AutomationEntityTriggerEnum = "custom_schedule"
	AutomationEntityTriggerEnumWebhook        AutomationEntityTriggerEnum = "webhook"
	AutomationEntityTriggerEnumEmail          AutomationEntityTriggerEnum = "email"
	AutomationEntityTriggerEnumAction         AutomationEntityTriggerEnum = "action"
)

type AutomationEntity struct {
	Automation             *AutomationEntityAutomationEnum `json:"automation,omitempty"`
	DestinationReplaceFrom *string                         `json:"destination_replace_from,omitempty"`
	DestinationReplaceTo   *string                         `json:"destination_replace_to,omitempty"`
	Destinations           *string                         `json:"destinations,omitempty"`
	GroupIds               []int32                         `json:"group_ids,omitempty"`
	ID                     *int32                          `json:"id,omitempty"`
	Interval               *string                         `json:"interval,omitempty"`
	NextProcessOn          *string                         `json:"next_process_on,omitempty"`
	Path                   *string                         `json:"path,omitempty"`
	Schedule               map[string]interface{}          `json:"schedule,omitempty"`
	Source                 *string                         `json:"source,omitempty"`
	Trigger                *AutomationEntityTriggerEnum    `json:"trigger,omitempty"`
	TriggerActionPath      *string                         `json:"trigger_action_path,omitempty"`
	TriggerActions         *string                         `json:"trigger_actions,omitempty"`
	UserID                 *int32                          `json:"user_id,omitempty"`
	UserIds                []int32                         `json:"user_ids,omitempty"`
	Value                  map[string]interface{}          `json:"value,omitempty"`
	WebhookURL             *string                         `json:"webhook_url,omitempty"`
}
