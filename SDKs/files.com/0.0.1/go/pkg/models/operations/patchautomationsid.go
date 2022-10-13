package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAutomationsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchAutomationsIDRequestBodyAutomationEnum string

const (
	PatchAutomationsIDRequestBodyAutomationEnumCreateFolder   PatchAutomationsIDRequestBodyAutomationEnum = "create_folder"
	PatchAutomationsIDRequestBodyAutomationEnumRequestFile    PatchAutomationsIDRequestBodyAutomationEnum = "request_file"
	PatchAutomationsIDRequestBodyAutomationEnumRequestMove    PatchAutomationsIDRequestBodyAutomationEnum = "request_move"
	PatchAutomationsIDRequestBodyAutomationEnumCopyNewestFile PatchAutomationsIDRequestBodyAutomationEnum = "copy_newest_file"
	PatchAutomationsIDRequestBodyAutomationEnumDeleteFile     PatchAutomationsIDRequestBodyAutomationEnum = "delete_file"
	PatchAutomationsIDRequestBodyAutomationEnumCopyFile       PatchAutomationsIDRequestBodyAutomationEnum = "copy_file"
	PatchAutomationsIDRequestBodyAutomationEnumMoveFile       PatchAutomationsIDRequestBodyAutomationEnum = "move_file"
)

type PatchAutomationsIDRequestBodyTriggerEnum string

const (
	PatchAutomationsIDRequestBodyTriggerEnumRealtime       PatchAutomationsIDRequestBodyTriggerEnum = "realtime"
	PatchAutomationsIDRequestBodyTriggerEnumDaily          PatchAutomationsIDRequestBodyTriggerEnum = "daily"
	PatchAutomationsIDRequestBodyTriggerEnumCustomSchedule PatchAutomationsIDRequestBodyTriggerEnum = "custom_schedule"
	PatchAutomationsIDRequestBodyTriggerEnumWebhook        PatchAutomationsIDRequestBodyTriggerEnum = "webhook"
	PatchAutomationsIDRequestBodyTriggerEnumEmail          PatchAutomationsIDRequestBodyTriggerEnum = "email"
	PatchAutomationsIDRequestBodyTriggerEnumAction         PatchAutomationsIDRequestBodyTriggerEnum = "action"
)

type PatchAutomationsIDRequestBody struct {
	Automation             PatchAutomationsIDRequestBodyAutomationEnum `multipartForm:"name=automation"`
	Destination            *string                                     `multipartForm:"name=destination"`
	DestinationReplaceFrom *string                                     `multipartForm:"name=destination_replace_from"`
	DestinationReplaceTo   *string                                     `multipartForm:"name=destination_replace_to"`
	Destinations           []string                                    `multipartForm:"name=destinations"`
	GroupIds               *string                                     `multipartForm:"name=group_ids"`
	Interval               *string                                     `multipartForm:"name=interval"`
	Path                   *string                                     `multipartForm:"name=path"`
	Schedule               map[string]interface{}                      `multipartForm:"name=schedule,json"`
	Source                 *string                                     `multipartForm:"name=source"`
	Trigger                *PatchAutomationsIDRequestBodyTriggerEnum   `multipartForm:"name=trigger"`
	TriggerActionPath      *string                                     `multipartForm:"name=trigger_action_path"`
	TriggerActions         []string                                    `multipartForm:"name=trigger_actions"`
	UserIds                *string                                     `multipartForm:"name=user_ids"`
	Value                  map[string]interface{}                      `multipartForm:"name=value,json"`
}

type PatchAutomationsIDRequest struct {
	PathParams PatchAutomationsIDPathParams
	Request    PatchAutomationsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchAutomationsIDResponse struct {
	AutomationEntity *shared.AutomationEntity
	ContentType      string
	StatusCode       int64
}
