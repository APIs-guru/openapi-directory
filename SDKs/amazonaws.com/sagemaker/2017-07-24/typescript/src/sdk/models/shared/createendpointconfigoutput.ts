import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEndpointConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointConfigArn" })
  endpointConfigArn: string;
}
