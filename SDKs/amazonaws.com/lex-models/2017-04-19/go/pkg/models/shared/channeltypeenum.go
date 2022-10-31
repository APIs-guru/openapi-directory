package shared

type ChannelTypeEnum string

const (
	ChannelTypeEnumFacebook  ChannelTypeEnum = "Facebook"
	ChannelTypeEnumSlack     ChannelTypeEnum = "Slack"
	ChannelTypeEnumTwilioSms ChannelTypeEnum = "Twilio-Sms"
	ChannelTypeEnumKik       ChannelTypeEnum = "Kik"
)
