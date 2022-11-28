import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelBiasAppSpecification } from "./modelbiasappspecification";
import { ModelBiasBaselineConfig } from "./modelbiasbaselineconfig";
import { ModelBiasJobInput } from "./modelbiasjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
export declare class DescribeModelBiasJobDefinitionResponse extends SpeakeasyBase {
    creationTime: Date;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    jobResources: MonitoringResources;
    modelBiasAppSpecification: ModelBiasAppSpecification;
    modelBiasBaselineConfig?: ModelBiasBaselineConfig;
    modelBiasJobInput: ModelBiasJobInput;
    modelBiasJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
}
