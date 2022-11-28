import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringOutput } from "./monitoringoutput";



// MonitoringOutputConfig
/** 
 * The output configuration for monitoring jobs.
**/
export class MonitoringOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringOutputs", elemType: MonitoringOutput })
  monitoringOutputs: MonitoringOutput[];
}
