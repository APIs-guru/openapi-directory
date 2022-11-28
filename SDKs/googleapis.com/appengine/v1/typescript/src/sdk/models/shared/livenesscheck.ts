import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LivenessCheck
/** 
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
**/
export class LivenessCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=initialDelay" })
  initialDelay?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
