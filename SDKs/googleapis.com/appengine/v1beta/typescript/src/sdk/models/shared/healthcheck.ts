import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HealthCheck
/** 
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
**/
export class HealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @Metadata({ data: "json, name=disableHealthCheck" })
  disableHealthCheck?: boolean;

  @Metadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=restartThreshold" })
  restartThreshold?: number;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
