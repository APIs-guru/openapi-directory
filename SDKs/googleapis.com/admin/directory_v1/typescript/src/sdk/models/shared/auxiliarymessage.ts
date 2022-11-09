import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuxiliaryMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    SeverityInfo = "SEVERITY_INFO"
,    SeverityWarning = "SEVERITY_WARNING"
,    SeverityError = "SEVERITY_ERROR"
}


// AuxiliaryMessage
/** 
 * Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}
**/
export class AuxiliaryMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryMessage" })
  auxiliaryMessage?: string;

  @Metadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: AuxiliaryMessageSeverityEnum;
}
