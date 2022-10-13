package shared

type NotificationEntitySendIntervalEnum string

const (
	NotificationEntitySendIntervalEnumFiveMinutes    NotificationEntitySendIntervalEnum = "five_minutes"
	NotificationEntitySendIntervalEnumFifteenMinutes NotificationEntitySendIntervalEnum = "fifteen_minutes"
	NotificationEntitySendIntervalEnumHourly         NotificationEntitySendIntervalEnum = "hourly"
	NotificationEntitySendIntervalEnumDaily          NotificationEntitySendIntervalEnum = "daily"
)

type NotificationEntityUnsubscribedReasonEnum string

const (
	NotificationEntityUnsubscribedReasonEnumNone                   NotificationEntityUnsubscribedReasonEnum = "none"
	NotificationEntityUnsubscribedReasonEnumUnsubscribeLinkClicked NotificationEntityUnsubscribedReasonEnum = "unsubscribe_link_clicked"
	NotificationEntityUnsubscribedReasonEnumMailBounced            NotificationEntityUnsubscribedReasonEnum = "mail_bounced"
	NotificationEntityUnsubscribedReasonEnumMailMarkedAsSpam       NotificationEntityUnsubscribedReasonEnum = "mail_marked_as_spam"
)

type NotificationEntity struct {
	GroupID            *int32                                    `json:"group_id"`
	GroupName          *string                                   `json:"group_name"`
	ID                 *int32                                    `json:"id"`
	NotifyOnCopy       *bool                                     `json:"notify_on_copy"`
	NotifyUserActions  *bool                                     `json:"notify_user_actions"`
	Path               *string                                   `json:"path"`
	Recursive          *bool                                     `json:"recursive"`
	SendInterval       *NotificationEntitySendIntervalEnum       `json:"send_interval"`
	SuppressedEmail    *bool                                     `json:"suppressed_email"`
	Unsubscribed       *bool                                     `json:"unsubscribed"`
	UnsubscribedReason *NotificationEntityUnsubscribedReasonEnum `json:"unsubscribed_reason"`
	UserID             *int32                                    `json:"user_id"`
	Username           *string                                   `json:"username"`
}
