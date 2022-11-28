import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelExplainabilityAppSpecification } from "./modelexplainabilityappspecification";
import { ModelExplainabilityBaselineConfig } from "./modelexplainabilitybaselineconfig";
import { ModelExplainabilityJobInput } from "./modelexplainabilityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
export declare class CreateModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    jobDefinitionName: string;
    jobResources: MonitoringResources;
    modelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;
    modelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;
    modelExplainabilityJobInput: ModelExplainabilityJobInput;
    modelExplainabilityJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
    tags?: Tag[];
}
