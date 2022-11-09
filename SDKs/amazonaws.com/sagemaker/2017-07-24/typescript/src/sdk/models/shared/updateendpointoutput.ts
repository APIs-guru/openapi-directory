import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
