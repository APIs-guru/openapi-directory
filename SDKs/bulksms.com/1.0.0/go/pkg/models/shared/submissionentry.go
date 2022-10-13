package shared

type SubmissionEntryDeliveryReportsEnum string

const (
	SubmissionEntryDeliveryReportsEnumAll    SubmissionEntryDeliveryReportsEnum = "ALL"
	SubmissionEntryDeliveryReportsEnumErrors SubmissionEntryDeliveryReportsEnum = "ERRORS"
	SubmissionEntryDeliveryReportsEnumNone   SubmissionEntryDeliveryReportsEnum = "NONE"
)

type SubmissionEntryEncodingEnum string

const (
	SubmissionEntryEncodingEnumText    SubmissionEntryEncodingEnum = "TEXT"
	SubmissionEntryEncodingEnumUnicode SubmissionEntryEncodingEnum = "UNICODE"
	SubmissionEntryEncodingEnumBinary  SubmissionEntryEncodingEnum = "BINARY"
)

type SubmissionEntryFromTypeEnum string

const (
	SubmissionEntryFromTypeEnumInternational SubmissionEntryFromTypeEnum = "INTERNATIONAL"
	SubmissionEntryFromTypeEnumAlphanumeric  SubmissionEntryFromTypeEnum = "ALPHANUMERIC"
	SubmissionEntryFromTypeEnumShortcode     SubmissionEntryFromTypeEnum = "SHORTCODE"
	SubmissionEntryFromTypeEnumRepliable     SubmissionEntryFromTypeEnum = "REPLIABLE"
)

type SubmissionEntryFrom struct {
	Address *string                     `json:"address"`
	Type    SubmissionEntryFromTypeEnum `json:"type"`
}

type SubmissionEntryMessageClassEnum string

const (
	SubmissionEntryMessageClassEnumFlashSms    SubmissionEntryMessageClassEnum = "FLASH_SMS"
	SubmissionEntryMessageClassEnumMeSpecific  SubmissionEntryMessageClassEnum = "ME_SPECIFIC"
	SubmissionEntryMessageClassEnumSimSpecific SubmissionEntryMessageClassEnum = "SIM_SPECIFIC"
	SubmissionEntryMessageClassEnumTeSpecific  SubmissionEntryMessageClassEnum = "TE_SPECIFIC"
)

type SubmissionEntryProtocolIDEnum string

const (
	SubmissionEntryProtocolIDEnumImplicit          SubmissionEntryProtocolIDEnum = "IMPLICIT"
	SubmissionEntryProtocolIDEnumShortMessageType0 SubmissionEntryProtocolIDEnum = "SHORT_MESSAGE_TYPE_0"
	SubmissionEntryProtocolIDEnumReplaceMessage1   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_1"
	SubmissionEntryProtocolIDEnumReplaceMessage2   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_2"
	SubmissionEntryProtocolIDEnumReplaceMessage3   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_3"
	SubmissionEntryProtocolIDEnumReplaceMessage4   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_4"
	SubmissionEntryProtocolIDEnumReplaceMessage5   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_5"
	SubmissionEntryProtocolIDEnumReplaceMessage6   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_6"
	SubmissionEntryProtocolIDEnumReplaceMessage7   SubmissionEntryProtocolIDEnum = "REPLACE_MESSAGE_7"
	SubmissionEntryProtocolIDEnumReturnCall        SubmissionEntryProtocolIDEnum = "RETURN_CALL"
	SubmissionEntryProtocolIDEnumMeDownload        SubmissionEntryProtocolIDEnum = "ME_DOWNLOAD"
	SubmissionEntryProtocolIDEnumMeDepersonalize   SubmissionEntryProtocolIDEnum = "ME_DEPERSONALIZE"
	SubmissionEntryProtocolIDEnumSimDownload       SubmissionEntryProtocolIDEnum = "SIM_DOWNLOAD"
)

type SubmissionEntryRoutingGroupEnum string

const (
	SubmissionEntryRoutingGroupEnumEconomy  SubmissionEntryRoutingGroupEnum = "ECONOMY"
	SubmissionEntryRoutingGroupEnumStandard SubmissionEntryRoutingGroupEnum = "STANDARD"
	SubmissionEntryRoutingGroupEnumPremium  SubmissionEntryRoutingGroupEnum = "PREMIUM"
)

type SubmissionEntryToTypeEnum string

const (
	SubmissionEntryToTypeEnumInternational SubmissionEntryToTypeEnum = "INTERNATIONAL"
	SubmissionEntryToTypeEnumGroup         SubmissionEntryToTypeEnum = "GROUP"
)

type SubmissionEntryTo struct {
	Address *string                    `json:"address"`
	Fields  []string                   `json:"fields"`
	ID      *string                    `json:"id"`
	Name    *string                    `json:"name"`
	Type    *SubmissionEntryToTypeEnum `json:"type"`
}

type SubmissionEntry struct {
	Body                string                              `json:"body"`
	DeliveryReports     *SubmissionEntryDeliveryReportsEnum `json:"deliveryReports"`
	Encoding            *SubmissionEntryEncodingEnum        `json:"encoding"`
	From                *SubmissionEntryFrom                `json:"from"`
	LongMessageMaxParts *int32                              `json:"longMessageMaxParts"`
	MessageClass        *SubmissionEntryMessageClassEnum    `json:"messageClass"`
	ProtocolID          *SubmissionEntryProtocolIDEnum      `json:"protocolId"`
	RoutingGroup        *SubmissionEntryRoutingGroupEnum    `json:"routingGroup"`
	To                  []SubmissionEntryTo                 `json:"to"`
	UserSuppliedID      *string                             `json:"userSuppliedId"`
}
