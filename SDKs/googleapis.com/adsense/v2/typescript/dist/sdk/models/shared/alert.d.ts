import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AlertSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Severe = "SEVERE"
}
/**
 * Representation of an alert.
**/
export declare class Alert extends SpeakeasyBase {
    message?: string;
    name?: string;
    severity?: AlertSeverityEnum;
    type?: string;
}
