import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGatewayResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayArn" })
  gatewayArn: string;

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId: string;
}
