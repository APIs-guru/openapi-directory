import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
**/
export declare class V2ApiTarget extends SpeakeasyBase {
    methods?: string[];
    service?: string;
}
