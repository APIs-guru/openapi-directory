import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReadinessCheck
/** 
 * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
**/
export class ReadinessCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStartTimeout" })
  appStartTimeout?: string;

  @Metadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @Metadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
