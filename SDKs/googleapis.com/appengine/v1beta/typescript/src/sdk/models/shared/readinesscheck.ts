import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReadinessCheck
/** 
 * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
**/
export class ReadinessCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStartTimeout" })
  appStartTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=checkInterval" })
  checkInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=failureThreshold" })
  failureThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=successThreshold" })
  successThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
