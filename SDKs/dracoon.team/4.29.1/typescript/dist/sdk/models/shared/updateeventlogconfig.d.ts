import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating eventlog settings
**/
export declare class UpdateEventlogConfig extends SpeakeasyBase {
    enabled?: boolean;
    logIpEnabled?: boolean;
    retentionPeriod?: number;
}
