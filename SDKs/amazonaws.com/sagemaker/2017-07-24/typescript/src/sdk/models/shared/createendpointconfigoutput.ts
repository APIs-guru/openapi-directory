import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEndpointConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigArn" })
  endpointConfigArn: string;
}
