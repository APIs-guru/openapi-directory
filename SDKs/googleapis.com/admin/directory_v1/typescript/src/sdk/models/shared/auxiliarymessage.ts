import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuxiliaryMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    SeverityInfo = "SEVERITY_INFO",
    SeverityWarning = "SEVERITY_WARNING",
    SeverityError = "SEVERITY_ERROR"
}


// AuxiliaryMessage
/** 
 * Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}
**/
export class AuxiliaryMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryMessage" })
  auxiliaryMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: AuxiliaryMessageSeverityEnum;
}
