import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelQualityAppSpecification } from "./modelqualityappspecification";
import { ModelQualityBaselineConfig } from "./modelqualitybaselineconfig";
import { ModelQualityJobInput } from "./modelqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
export declare class CreateModelQualityJobDefinitionRequest extends SpeakeasyBase {
    jobDefinitionName: string;
    jobResources: MonitoringResources;
    modelQualityAppSpecification: ModelQualityAppSpecification;
    modelQualityBaselineConfig?: ModelQualityBaselineConfig;
    modelQualityJobInput: ModelQualityJobInput;
    modelQualityJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
    tags?: Tag[];
}
