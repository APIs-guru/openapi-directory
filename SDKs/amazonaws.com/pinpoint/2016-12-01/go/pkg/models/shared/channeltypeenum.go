package shared




type ChannelTypeEnum string

const (
    ChannelTypeEnumPush ChannelTypeEnum = "PUSH"
ChannelTypeEnumGcm ChannelTypeEnum = "GCM"
ChannelTypeEnumApns ChannelTypeEnum = "APNS"
ChannelTypeEnumApnsSandbox ChannelTypeEnum = "APNS_SANDBOX"
ChannelTypeEnumApnsVoip ChannelTypeEnum = "APNS_VOIP"
ChannelTypeEnumApnsVoipSandbox ChannelTypeEnum = "APNS_VOIP_SANDBOX"
ChannelTypeEnumAdm ChannelTypeEnum = "ADM"
ChannelTypeEnumSms ChannelTypeEnum = "SMS"
ChannelTypeEnumVoice ChannelTypeEnum = "VOICE"
ChannelTypeEnumEmail ChannelTypeEnum = "EMAIL"
ChannelTypeEnumBaidu ChannelTypeEnum = "BAIDU"
ChannelTypeEnumCustom ChannelTypeEnum = "CUSTOM"
ChannelTypeEnumInApp ChannelTypeEnum = "IN_APP"
)


