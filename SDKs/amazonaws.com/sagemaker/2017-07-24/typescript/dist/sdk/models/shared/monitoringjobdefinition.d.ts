import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringBaselineConfig } from "./monitoringbaselineconfig";
import { MonitoringAppSpecification } from "./monitoringappspecification";
import { MonitoringInput } from "./monitoringinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { NetworkConfig } from "./networkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
/**
 * Defines the monitoring job.
**/
export declare class MonitoringJobDefinition extends SpeakeasyBase {
    baselineConfig?: MonitoringBaselineConfig;
    environment?: Map<string, string>;
    monitoringAppSpecification: MonitoringAppSpecification;
    monitoringInputs: MonitoringInput[];
    monitoringOutputConfig: MonitoringOutputConfig;
    monitoringResources: MonitoringResources;
    networkConfig?: NetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
}
