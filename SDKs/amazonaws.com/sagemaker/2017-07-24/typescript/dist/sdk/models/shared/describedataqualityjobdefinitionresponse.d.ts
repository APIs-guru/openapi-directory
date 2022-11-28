import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityAppSpecification } from "./dataqualityappspecification";
import { DataQualityBaselineConfig } from "./dataqualitybaselineconfig";
import { DataQualityJobInput } from "./dataqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
export declare class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
    creationTime: Date;
    dataQualityAppSpecification: DataQualityAppSpecification;
    dataQualityBaselineConfig?: DataQualityBaselineConfig;
    dataQualityJobInput: DataQualityJobInput;
    dataQualityJobOutputConfig: MonitoringOutputConfig;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    jobResources: MonitoringResources;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
}
