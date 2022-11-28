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

// SubmissionEntryFrom
// Identifies the sender.
//
// Instead of a structured object, you can supply a string value here.
// If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
type SubmissionEntryFrom struct {
	Address *string                     `json:"address,omitempty"`
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
	Address *string                    `json:"address,omitempty"`
	Fields  []string                   `json:"fields,omitempty"`
	ID      *string                    `json:"id,omitempty"`
	Name    *string                    `json:"name,omitempty"`
	Type    *SubmissionEntryToTypeEnum `json:"type,omitempty"`
}

// SubmissionEntry
// An object that you use when posting messages.
type SubmissionEntry struct {
	Body                string                              `json:"body"`
	DeliveryReports     *SubmissionEntryDeliveryReportsEnum `json:"deliveryReports,omitempty"`
	Encoding            *SubmissionEntryEncodingEnum        `json:"encoding,omitempty"`
	From                *SubmissionEntryFrom                `json:"from,omitempty"`
	LongMessageMaxParts *int32                              `json:"longMessageMaxParts,omitempty"`
	MessageClass        *SubmissionEntryMessageClassEnum    `json:"messageClass,omitempty"`
	ProtocolID          *SubmissionEntryProtocolIDEnum      `json:"protocolId,omitempty"`
	RoutingGroup        *SubmissionEntryRoutingGroupEnum    `json:"routingGroup,omitempty"`
	To                  []SubmissionEntryTo                 `json:"to"`
	UserSuppliedID      *string                             `json:"userSuppliedId,omitempty"`
}
