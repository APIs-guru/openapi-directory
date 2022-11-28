import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerServiceHealthCheckConfig
/** 
 * Describes the health check configuration of an Amazon Lightsail container service.
**/
export class ContainerServiceHealthCheckConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=intervalSeconds" })
  intervalSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=successCodes" })
  successCodes?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
