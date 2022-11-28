import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayArn" })
  gatewayArn: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId: string;
}
