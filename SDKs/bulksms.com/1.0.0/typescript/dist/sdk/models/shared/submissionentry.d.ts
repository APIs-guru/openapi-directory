import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubmissionEntryDeliveryReportsEnum {
    All = "ALL",
    Errors = "ERRORS",
    None = "NONE"
}
export declare enum SubmissionEntryEncodingEnum {
    Text = "TEXT",
    Unicode = "UNICODE",
    Binary = "BINARY"
}
export declare enum SubmissionEntryFromTypeEnum {
    International = "INTERNATIONAL",
    Alphanumeric = "ALPHANUMERIC",
    Shortcode = "SHORTCODE",
    Repliable = "REPLIABLE"
}
/**
 * Identifies the sender.
 *
 * Instead of a structured object, you can supply a string value here.
 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
 *
**/
export declare class SubmissionEntryFrom extends SpeakeasyBase {
    address?: string;
    type: SubmissionEntryFromTypeEnum;
}
export declare enum SubmissionEntryMessageClassEnum {
    FlashSms = "FLASH_SMS",
    MeSpecific = "ME_SPECIFIC",
    SimSpecific = "SIM_SPECIFIC",
    TeSpecific = "TE_SPECIFIC"
}
export declare enum SubmissionEntryProtocolIdEnum {
    Implicit = "IMPLICIT",
    ShortMessageType0 = "SHORT_MESSAGE_TYPE_0",
    ReplaceMessage1 = "REPLACE_MESSAGE_1",
    ReplaceMessage2 = "REPLACE_MESSAGE_2",
    ReplaceMessage3 = "REPLACE_MESSAGE_3",
    ReplaceMessage4 = "REPLACE_MESSAGE_4",
    ReplaceMessage5 = "REPLACE_MESSAGE_5",
    ReplaceMessage6 = "REPLACE_MESSAGE_6",
    ReplaceMessage7 = "REPLACE_MESSAGE_7",
    ReturnCall = "RETURN_CALL",
    MeDownload = "ME_DOWNLOAD",
    MeDepersonalize = "ME_DEPERSONALIZE",
    SimDownload = "SIM_DOWNLOAD"
}
export declare enum SubmissionEntryRoutingGroupEnum {
    Economy = "ECONOMY",
    Standard = "STANDARD",
    Premium = "PREMIUM"
}
export declare enum SubmissionEntryToTypeEnum {
    International = "INTERNATIONAL",
    Group = "GROUP"
}
export declare class SubmissionEntryTo extends SpeakeasyBase {
    address?: string;
    fields?: string[];
    id?: string;
    name?: string;
    type?: SubmissionEntryToTypeEnum;
}
/**
 * An object that you use when posting messages.
**/
export declare class SubmissionEntry extends SpeakeasyBase {
    body: string;
    deliveryReports?: SubmissionEntryDeliveryReportsEnum;
    encoding?: SubmissionEntryEncodingEnum;
    from?: SubmissionEntryFrom;
    longMessageMaxParts?: number;
    messageClass?: SubmissionEntryMessageClassEnum;
    protocolId?: SubmissionEntryProtocolIdEnum;
    routingGroup?: SubmissionEntryRoutingGroupEnum;
    to: SubmissionEntryTo[];
    userSuppliedId?: string;
}
