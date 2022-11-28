import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataEndpoint" })
  dataEndpoint?: string;
}
