import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
