import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointResponse } from "./endpointresponse";



export class GetEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointResponse" })
  endpointResponse: EndpointResponse;
}
