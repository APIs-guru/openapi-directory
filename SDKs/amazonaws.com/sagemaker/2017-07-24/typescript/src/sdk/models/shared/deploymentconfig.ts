import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRollbackConfig } from "./autorollbackconfig";
import { BlueGreenUpdatePolicy } from "./bluegreenupdatepolicy";


// DeploymentConfig
/** 
 * Currently, the <code>DeploymentConfig</code> API is not supported.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfig;

  @Metadata({ data: "json, name=BlueGreenUpdatePolicy" })
  blueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
