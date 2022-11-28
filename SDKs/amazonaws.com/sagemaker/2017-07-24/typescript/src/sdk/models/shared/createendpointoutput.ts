import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
