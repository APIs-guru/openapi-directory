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
	GroupID            *int32                                    `json:"group_id,omitempty"`
	GroupName          *string                                   `json:"group_name,omitempty"`
	ID                 *int32                                    `json:"id,omitempty"`
	NotifyOnCopy       *bool                                     `json:"notify_on_copy,omitempty"`
	NotifyUserActions  *bool                                     `json:"notify_user_actions,omitempty"`
	Path               *string                                   `json:"path,omitempty"`
	Recursive          *bool                                     `json:"recursive,omitempty"`
	SendInterval       *NotificationEntitySendIntervalEnum       `json:"send_interval,omitempty"`
	SuppressedEmail    *bool                                     `json:"suppressed_email,omitempty"`
	Unsubscribed       *bool                                     `json:"unsubscribed,omitempty"`
	UnsubscribedReason *NotificationEntityUnsubscribedReasonEnum `json:"unsubscribed_reason,omitempty"`
	UserID             *int32                                    `json:"user_id,omitempty"`
	Username           *string                                   `json:"username,omitempty"`
}
