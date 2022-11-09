import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
