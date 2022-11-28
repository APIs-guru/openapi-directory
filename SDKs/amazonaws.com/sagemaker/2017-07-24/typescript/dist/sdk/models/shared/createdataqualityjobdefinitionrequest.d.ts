import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityAppSpecification } from "./dataqualityappspecification";
import { DataQualityBaselineConfig } from "./dataqualitybaselineconfig";
import { DataQualityJobInput } from "./dataqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
export declare class CreateDataQualityJobDefinitionRequest extends SpeakeasyBase {
    dataQualityAppSpecification: DataQualityAppSpecification;
    dataQualityBaselineConfig?: DataQualityBaselineConfig;
    dataQualityJobInput: DataQualityJobInput;
    dataQualityJobOutputConfig: MonitoringOutputConfig;
    jobDefinitionName: string;
    jobResources: MonitoringResources;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
    tags?: Tag[];
}
