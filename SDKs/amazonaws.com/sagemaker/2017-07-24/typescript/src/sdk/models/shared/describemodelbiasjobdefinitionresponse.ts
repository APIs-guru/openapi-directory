import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringResources } from "./monitoringresources";
import { ModelBiasAppSpecification } from "./modelbiasappspecification";
import { ModelBiasBaselineConfig } from "./modelbiasbaselineconfig";
import { ModelBiasJobInput } from "./modelbiasjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";



export class DescribeModelBiasJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionArn" })
  jobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @SpeakeasyMetadata({ data: "json, name=ModelBiasAppSpecification" })
  modelBiasAppSpecification: ModelBiasAppSpecification;

  @SpeakeasyMetadata({ data: "json, name=ModelBiasBaselineConfig" })
  modelBiasBaselineConfig?: ModelBiasBaselineConfig;

  @SpeakeasyMetadata({ data: "json, name=ModelBiasJobInput" })
  modelBiasJobInput: ModelBiasJobInput;

  @SpeakeasyMetadata({ data: "json, name=ModelBiasJobOutputConfig" })
  modelBiasJobOutputConfig: MonitoringOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
