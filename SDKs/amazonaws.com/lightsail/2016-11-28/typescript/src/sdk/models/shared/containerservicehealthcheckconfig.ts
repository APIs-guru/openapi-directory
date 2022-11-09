import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerServiceHealthCheckConfig
/** 
 * Describes the health check configuration of an Amazon Lightsail container service.
**/
export class ContainerServiceHealthCheckConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=intervalSeconds" })
  intervalSeconds?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=successCodes" })
  successCodes?: string;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
