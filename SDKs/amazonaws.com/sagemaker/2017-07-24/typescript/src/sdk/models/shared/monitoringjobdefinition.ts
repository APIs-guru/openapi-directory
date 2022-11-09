import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringBaselineConfig } from "./monitoringbaselineconfig";
import { MonitoringAppSpecification } from "./monitoringappspecification";
import { MonitoringInput } from "./monitoringinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { NetworkConfig } from "./networkconfig";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";


// MonitoringJobDefinition
/** 
 * Defines the monitoring job.
**/
export class MonitoringJobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineConfig" })
  baselineConfig?: MonitoringBaselineConfig;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=MonitoringAppSpecification" })
  monitoringAppSpecification: MonitoringAppSpecification;

  @Metadata({ data: "json, name=MonitoringInputs", elemType: shared.MonitoringInput })
  monitoringInputs: MonitoringInput[];

  @Metadata({ data: "json, name=MonitoringOutputConfig" })
  monitoringOutputConfig: MonitoringOutputConfig;

  @Metadata({ data: "json, name=MonitoringResources" })
  monitoringResources: MonitoringResources;

  @Metadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
