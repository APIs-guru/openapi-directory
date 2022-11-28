import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KeyedAppStateSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Error = "ERROR"
}
/**
 * Keyed app state reported by the app.
**/
export declare class KeyedAppState extends SpeakeasyBase {
    createTime?: string;
    data?: string;
    key?: string;
    lastUpdateTime?: string;
    message?: string;
    severity?: KeyedAppStateSeverityEnum;
}
