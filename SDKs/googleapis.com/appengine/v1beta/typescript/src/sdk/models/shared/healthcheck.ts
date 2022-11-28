import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HealthCheck
/** 
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
**/
export class HealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=disableHealthCheck" })
  disableHealthCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=restartThreshold" })
  restartThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
