package operations

import (
	"openapi/pkg/models/shared"
)

type PostAutomationsRequestBodyAutomationEnum string

const (
	PostAutomationsRequestBodyAutomationEnumCreateFolder   PostAutomationsRequestBodyAutomationEnum = "create_folder"
	PostAutomationsRequestBodyAutomationEnumRequestFile    PostAutomationsRequestBodyAutomationEnum = "request_file"
	PostAutomationsRequestBodyAutomationEnumRequestMove    PostAutomationsRequestBodyAutomationEnum = "request_move"
	PostAutomationsRequestBodyAutomationEnumCopyNewestFile PostAutomationsRequestBodyAutomationEnum = "copy_newest_file"
	PostAutomationsRequestBodyAutomationEnumDeleteFile     PostAutomationsRequestBodyAutomationEnum = "delete_file"
	PostAutomationsRequestBodyAutomationEnumCopyFile       PostAutomationsRequestBodyAutomationEnum = "copy_file"
	PostAutomationsRequestBodyAutomationEnumMoveFile       PostAutomationsRequestBodyAutomationEnum = "move_file"
)

type PostAutomationsRequestBodyTriggerEnum string

const (
	PostAutomationsRequestBodyTriggerEnumRealtime       PostAutomationsRequestBodyTriggerEnum = "realtime"
	PostAutomationsRequestBodyTriggerEnumDaily          PostAutomationsRequestBodyTriggerEnum = "daily"
	PostAutomationsRequestBodyTriggerEnumCustomSchedule PostAutomationsRequestBodyTriggerEnum = "custom_schedule"
	PostAutomationsRequestBodyTriggerEnumWebhook        PostAutomationsRequestBodyTriggerEnum = "webhook"
	PostAutomationsRequestBodyTriggerEnumEmail          PostAutomationsRequestBodyTriggerEnum = "email"
	PostAutomationsRequestBodyTriggerEnumAction         PostAutomationsRequestBodyTriggerEnum = "action"
)

type PostAutomationsRequestBody struct {
	Automation             PostAutomationsRequestBodyAutomationEnum `multipartForm:"name=automation"`
	Destination            *string                                  `multipartForm:"name=destination"`
	DestinationReplaceFrom *string                                  `multipartForm:"name=destination_replace_from"`
	DestinationReplaceTo   *string                                  `multipartForm:"name=destination_replace_to"`
	Destinations           []string                                 `multipartForm:"name=destinations"`
	GroupIds               *string                                  `multipartForm:"name=group_ids"`
	Interval               *string                                  `multipartForm:"name=interval"`
	Path                   *string                                  `multipartForm:"name=path"`
	Schedule               map[string]interface{}                   `multipartForm:"name=schedule,json"`
	Source                 *string                                  `multipartForm:"name=source"`
	Trigger                *PostAutomationsRequestBodyTriggerEnum   `multipartForm:"name=trigger"`
	TriggerActionPath      *string                                  `multipartForm:"name=trigger_action_path"`
	TriggerActions         []string                                 `multipartForm:"name=trigger_actions"`
	UserIds                *string                                  `multipartForm:"name=user_ids"`
	Value                  map[string]interface{}                   `multipartForm:"name=value,json"`
}

type PostAutomationsRequest struct {
	Request PostAutomationsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAutomationsResponse struct {
	AutomationEntity *shared.AutomationEntity
	ContentType      string
	StatusCode       int64
}
