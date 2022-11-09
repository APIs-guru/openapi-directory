import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringResources } from "./monitoringresources";
import { ModelQualityAppSpecification } from "./modelqualityappspecification";
import { ModelQualityBaselineConfig } from "./modelqualitybaselineconfig";
import { ModelQualityJobInput } from "./modelqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";


export class CreateModelQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @Metadata({ data: "json, name=ModelQualityAppSpecification" })
  modelQualityAppSpecification: ModelQualityAppSpecification;

  @Metadata({ data: "json, name=ModelQualityBaselineConfig" })
  modelQualityBaselineConfig?: ModelQualityBaselineConfig;

  @Metadata({ data: "json, name=ModelQualityJobInput" })
  modelQualityJobInput: ModelQualityJobInput;

  @Metadata({ data: "json, name=ModelQualityJobOutputConfig" })
  modelQualityJobOutputConfig: MonitoringOutputConfig;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
