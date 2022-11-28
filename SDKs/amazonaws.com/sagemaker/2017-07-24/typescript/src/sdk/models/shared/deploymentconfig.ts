import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfig } from "./autorollbackconfig";
import { BlueGreenUpdatePolicy } from "./bluegreenupdatepolicy";



// DeploymentConfig
/** 
 * Currently, the <code>DeploymentConfig</code> API is not supported.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfig;

  @SpeakeasyMetadata({ data: "json, name=BlueGreenUpdatePolicy" })
  blueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
