import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Protection
/** 
 * An object that represents a resource that is under DDoS protection.
**/
export class Protection extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthCheckIds" })
  healthCheckIds?: string[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProtectionArn" })
  protectionArn?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
