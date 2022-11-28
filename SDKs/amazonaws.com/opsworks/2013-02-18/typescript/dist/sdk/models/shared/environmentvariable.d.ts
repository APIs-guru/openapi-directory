import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an app's environment variable.
**/
export declare class EnvironmentVariable extends SpeakeasyBase {
    key: string;
    secure?: boolean;
    value: string;
}
