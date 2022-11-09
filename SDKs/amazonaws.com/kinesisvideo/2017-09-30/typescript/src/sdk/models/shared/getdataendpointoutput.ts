import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataEndpoint" })
  dataEndpoint?: string;
}
