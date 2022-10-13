package shared

type NotificationTransportEnum string

const (
	NotificationTransportEnumEmail NotificationTransportEnum = "Email"
	NotificationTransportEnumSqs   NotificationTransportEnum = "SQS"
	NotificationTransportEnumSns   NotificationTransportEnum = "SNS"
)
