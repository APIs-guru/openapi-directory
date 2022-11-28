import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelExplainabilityAppSpecification } from "./modelexplainabilityappspecification";
import { ModelExplainabilityBaselineConfig } from "./modelexplainabilitybaselineconfig";
import { ModelExplainabilityJobInput } from "./modelexplainabilityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";



export class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @SpeakeasyMetadata({ data: "json, name=ModelExplainabilityAppSpecification" })
  modelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;

  @SpeakeasyMetadata({ data: "json, name=ModelExplainabilityBaselineConfig" })
  modelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobInput" })
  modelExplainabilityJobInput: ModelExplainabilityJobInput;

  @SpeakeasyMetadata({ data: "json, name=ModelExplainabilityJobOutputConfig" })
  modelExplainabilityJobOutputConfig: MonitoringOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
