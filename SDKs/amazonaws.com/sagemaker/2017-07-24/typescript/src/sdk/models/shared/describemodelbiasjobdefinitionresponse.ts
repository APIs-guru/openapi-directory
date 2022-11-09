import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelBiasAppSpecification } from "./modelbiasappspecification";
import { ModelBiasBaselineConfig } from "./modelbiasbaselineconfig";
import { ModelBiasJobInput } from "./modelbiasjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";


export class DescribeModelBiasJobDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @Metadata({ data: "json, name=ModelBiasAppSpecification" })
  modelBiasAppSpecification: ModelBiasAppSpecification;

  @Metadata({ data: "json, name=ModelBiasBaselineConfig" })
  modelBiasBaselineConfig?: ModelBiasBaselineConfig;

  @Metadata({ data: "json, name=ModelBiasJobInput" })
  modelBiasJobInput: ModelBiasJobInput;

  @Metadata({ data: "json, name=ModelBiasJobOutputConfig" })
  modelBiasJobOutputConfig: MonitoringOutputConfig;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
