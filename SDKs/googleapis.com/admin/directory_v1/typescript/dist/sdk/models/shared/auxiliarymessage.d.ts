import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuxiliaryMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    SeverityInfo = "SEVERITY_INFO",
    SeverityWarning = "SEVERITY_WARNING",
    SeverityError = "SEVERITY_ERROR"
}
/**
 * Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}
**/
export declare class AuxiliaryMessage extends SpeakeasyBase {
    auxiliaryMessage?: string;
    fieldMask?: string;
    severity?: AuxiliaryMessageSeverityEnum;
}
