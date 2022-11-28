import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Protection
/** 
 * An object that represents a resource that is under DDoS protection.
**/
export class Protection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthCheckIds" })
  healthCheckIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtectionArn" })
  protectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
