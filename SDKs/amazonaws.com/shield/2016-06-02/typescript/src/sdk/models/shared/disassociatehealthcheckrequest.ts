import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateHealthCheckRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthCheckArn" })
  healthCheckArn: string;

  @Metadata({ data: "json, name=ProtectionId" })
  protectionId: string;
}
