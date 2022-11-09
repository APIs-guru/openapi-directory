import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataQualityAppSpecification } from "./dataqualityappspecification";
import { DataQualityBaselineConfig } from "./dataqualitybaselineconfig";
import { DataQualityJobInput } from "./dataqualityjobinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";


export class CreateDataQualityJobDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataQualityAppSpecification" })
  dataQualityAppSpecification: DataQualityAppSpecification;

  @Metadata({ data: "json, name=DataQualityBaselineConfig" })
  dataQualityBaselineConfig?: DataQualityBaselineConfig;

  @Metadata({ data: "json, name=DataQualityJobInput" })
  dataQualityJobInput: DataQualityJobInput;

  @Metadata({ data: "json, name=DataQualityJobOutputConfig" })
  dataQualityJobOutputConfig: MonitoringOutputConfig;

  @Metadata({ data: "json, name=JobDefinitionName" })
  jobDefinitionName: string;

  @Metadata({ data: "json, name=JobResources" })
  jobResources: MonitoringResources;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: MonitoringNetworkConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
