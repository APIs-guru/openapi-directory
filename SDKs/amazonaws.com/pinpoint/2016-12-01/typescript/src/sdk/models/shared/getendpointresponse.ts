import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointResponse } from "./endpointresponse";


export class GetEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointResponse" })
  endpointResponse: EndpointResponse;
}
