import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=BaselineConfig" })
  baselineConfig?: MonitoringBaselineConfig;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MonitoringAppSpecification" })
  monitoringAppSpecification: MonitoringAppSpecification;

  @SpeakeasyMetadata({ data: "json, name=MonitoringInputs", elemType: MonitoringInput })
  monitoringInputs: MonitoringInput[];

  @SpeakeasyMetadata({ data: "json, name=MonitoringOutputConfig" })
  monitoringOutputConfig: MonitoringOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=MonitoringResources" })
  monitoringResources: MonitoringResources;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition?: MonitoringStoppingCondition;
}
