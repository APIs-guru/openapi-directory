import { SpeakeasyBase } from "../../../internal/utils";
import { TextLogDestination } from "./textlogdestination";
/**
 * Defines settings to enable text conversation logs.
**/
export declare class TextLogSetting extends SpeakeasyBase {
    destination: TextLogDestination;
    enabled: boolean;
}
