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
	Automation             *AutomationEntityAutomationEnum `json:"automation"`
	DestinationReplaceFrom *string                         `json:"destination_replace_from"`
	DestinationReplaceTo   *string                         `json:"destination_replace_to"`
	Destinations           *string                         `json:"destinations"`
	GroupIds               []int32                         `json:"group_ids"`
	ID                     *int32                          `json:"id"`
	Interval               *string                         `json:"interval"`
	NextProcessOn          *string                         `json:"next_process_on"`
	Path                   *string                         `json:"path"`
	Schedule               map[string]interface{}          `json:"schedule"`
	Source                 *string                         `json:"source"`
	Trigger                *AutomationEntityTriggerEnum    `json:"trigger"`
	TriggerActionPath      *string                         `json:"trigger_action_path"`
	TriggerActions         *string                         `json:"trigger_actions"`
	UserID                 *int32                          `json:"user_id"`
	UserIds                []int32                         `json:"user_ids"`
	Value                  map[string]interface{}          `json:"value"`
	WebhookURL             *string                         `json:"webhook_url"`
}
