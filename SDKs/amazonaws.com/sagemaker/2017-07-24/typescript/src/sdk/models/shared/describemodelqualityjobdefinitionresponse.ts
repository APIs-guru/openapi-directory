import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelQualityAppSpecification } from "./modelqualityappspecification";
import { ModelQualityBaselineConfig } from "./modelqualitybaselineconfig";
import { ModelQualityJobInput } from "./modelqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";



export class DescribeModelQualityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @SpeakeasyMetadata({ data: "json, name=ModelQualityAppSpecification" })
  modelQualityAppSpecification: ModelQualityAppSpecification;

  @SpeakeasyMetadata({ data: "json, name=ModelQualityBaselineConfig" })
  modelQualityBaselineConfig?: ModelQualityBaselineConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelQualityJobInput" })
  modelQualityJobInput: ModelQualityJobInput;

  @SpeakeasyMetadata({ data: "json, name=ModelQualityJobOutputConfig" })
  modelQualityJobOutputConfig: MonitoringOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
