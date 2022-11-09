import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelExplainabilityAppSpecification } from "./modelexplainabilityappspecification";
import { ModelExplainabilityBaselineConfig } from "./modelexplainabilitybaselineconfig";
import { ModelExplainabilityJobInput } from "./modelexplainabilityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";


export class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @Metadata({ data: "json, name=ModelExplainabilityAppSpecification" })
  modelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;

  @Metadata({ data: "json, name=ModelExplainabilityBaselineConfig" })
  modelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  @Metadata({ data: "json, name=ModelExplainabilityJobInput" })
  modelExplainabilityJobInput: ModelExplainabilityJobInput;

  @Metadata({ data: "json, name=ModelExplainabilityJobOutputConfig" })
  modelExplainabilityJobOutputConfig: MonitoringOutputConfig;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
