import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringOutput } from "./monitoringoutput";


// MonitoringOutputConfig
/** 
 * The output configuration for monitoring jobs.
**/
export class MonitoringOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MonitoringOutputs", elemType: shared.MonitoringOutput })
  monitoringOutputs: MonitoringOutput[];
}
