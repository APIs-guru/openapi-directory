import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataQualityAppSpecification } from "./dataqualityappspecification";
import { DataQualityBaselineConfig } from "./dataqualitybaselineconfig";
import { DataQualityJobInput } from "./dataqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";



export class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DataQualityAppSpecification" })
  dataQualityAppSpecification: DataQualityAppSpecification;

  @SpeakeasyMetadata({ data: "json, name=DataQualityBaselineConfig" })
  dataQualityBaselineConfig?: DataQualityBaselineConfig;

  @SpeakeasyMetadata({ data: "json, name=DataQualityJobInput" })
  dataQualityJobInput: DataQualityJobInput;

  @SpeakeasyMetadata({ data: "json, name=DataQualityJobOutputConfig" })
  dataQualityJobOutputConfig: MonitoringOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
