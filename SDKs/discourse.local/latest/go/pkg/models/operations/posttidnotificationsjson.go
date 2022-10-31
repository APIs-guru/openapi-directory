package operations

type PostTIDNotificationsJSONPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostTIDNotificationsJSONHeaders struct {
	APIKey      string `header:"style=simple,explode=false,name=Api-Key"`
	APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
}

type PostTIDNotificationsJSONRequestBodyNotificationLevelEnum string

const (
	PostTIDNotificationsJSONRequestBodyNotificationLevelEnumZero  PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = "0"
	PostTIDNotificationsJSONRequestBodyNotificationLevelEnumOne   PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = "1"
	PostTIDNotificationsJSONRequestBodyNotificationLevelEnumTwo   PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = "2"
	PostTIDNotificationsJSONRequestBodyNotificationLevelEnumThree PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = "3"
)

type PostTIDNotificationsJSONRequestBody struct {
	NotificationLevel PostTIDNotificationsJSONRequestBodyNotificationLevelEnum `json:"notification_level"`
}

type PostTIDNotificationsJSONRequest struct {
	PathParams PostTIDNotificationsJSONPathParams
	Headers    PostTIDNotificationsJSONHeaders
	Request    *PostTIDNotificationsJSONRequestBody `request:"mediaType=application/json"`
}

type PostTIDNotificationsJSON200ApplicationJSON struct {
	Success *string `json:"success,omitempty"`
}

type PostTIDNotificationsJSONResponse struct {
	ContentType                                      string
	PostTIDNotificationsJSON200ApplicationJSONObject *PostTIDNotificationsJSON200ApplicationJSON
	StatusCode                                       int64
}
