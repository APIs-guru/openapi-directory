import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SubmissionEntryDeliveryReportsEnum {
    All = "ALL"
,    Errors = "ERRORS"
,    None = "NONE"
}

export enum SubmissionEntryEncodingEnum {
    Text = "TEXT"
,    Unicode = "UNICODE"
,    Binary = "BINARY"
}

export enum SubmissionEntryFromTypeEnum {
    International = "INTERNATIONAL"
,    Alphanumeric = "ALPHANUMERIC"
,    Shortcode = "SHORTCODE"
,    Repliable = "REPLIABLE"
}


// SubmissionEntryFrom
/** 
 * Identifies the sender.
 * 
 * Instead of a structured object, you can supply a string value here. 
 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
 * 
**/
export class SubmissionEntryFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=type" })
  type: SubmissionEntryFromTypeEnum;
}

export enum SubmissionEntryMessageClassEnum {
    FlashSms = "FLASH_SMS"
,    MeSpecific = "ME_SPECIFIC"
,    SimSpecific = "SIM_SPECIFIC"
,    TeSpecific = "TE_SPECIFIC"
}

export enum SubmissionEntryProtocolIdEnum {
    Implicit = "IMPLICIT"
,    ShortMessageType0 = "SHORT_MESSAGE_TYPE_0"
,    ReplaceMessage1 = "REPLACE_MESSAGE_1"
,    ReplaceMessage2 = "REPLACE_MESSAGE_2"
,    ReplaceMessage3 = "REPLACE_MESSAGE_3"
,    ReplaceMessage4 = "REPLACE_MESSAGE_4"
,    ReplaceMessage5 = "REPLACE_MESSAGE_5"
,    ReplaceMessage6 = "REPLACE_MESSAGE_6"
,    ReplaceMessage7 = "REPLACE_MESSAGE_7"
,    ReturnCall = "RETURN_CALL"
,    MeDownload = "ME_DOWNLOAD"
,    MeDepersonalize = "ME_DEPERSONALIZE"
,    SimDownload = "SIM_DOWNLOAD"
}

export enum SubmissionEntryRoutingGroupEnum {
    Economy = "ECONOMY"
,    Standard = "STANDARD"
,    Premium = "PREMIUM"
}

export enum SubmissionEntryToTypeEnum {
    International = "INTERNATIONAL"
,    Group = "GROUP"
}


export class SubmissionEntryTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: SubmissionEntryToTypeEnum;
}


// SubmissionEntry
/** 
 * An object that you use when posting messages.
**/
export class SubmissionEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=deliveryReports" })
  deliveryReports?: SubmissionEntryDeliveryReportsEnum;

  @Metadata({ data: "json, name=encoding" })
  encoding?: SubmissionEntryEncodingEnum;

  @Metadata({ data: "json, name=from" })
  from?: SubmissionEntryFrom;

  @Metadata({ data: "json, name=longMessageMaxParts" })
  longMessageMaxParts?: number;

  @Metadata({ data: "json, name=messageClass" })
  messageClass?: SubmissionEntryMessageClassEnum;

  @Metadata({ data: "json, name=protocolId" })
  protocolId?: SubmissionEntryProtocolIdEnum;

  @Metadata({ data: "json, name=routingGroup" })
  routingGroup?: SubmissionEntryRoutingGroupEnum;

  @Metadata({ data: "json, name=to", elemType: shared.SubmissionEntryTo })
  to: SubmissionEntryTo[];

  @Metadata({ data: "json, name=userSuppliedId" })
  userSuppliedId?: string;
}
