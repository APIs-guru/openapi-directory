import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringOutput } from "./monitoringoutput";
/**
 * The output configuration for monitoring jobs.
**/
export declare class MonitoringOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    monitoringOutputs: MonitoringOutput[];
}
