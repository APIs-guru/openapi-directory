import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateHealthCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthCheckArn" })
  healthCheckArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProtectionId" })
  protectionId: string;
}
