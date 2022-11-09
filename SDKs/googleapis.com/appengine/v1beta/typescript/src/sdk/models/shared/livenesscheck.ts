import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LivenessCheck
/** 
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
**/
export class LivenessCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @Metadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=initialDelay" })
  initialDelay?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
