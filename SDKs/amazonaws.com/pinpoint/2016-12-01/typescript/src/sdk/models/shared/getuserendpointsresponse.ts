import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointsResponse } from "./endpointsresponse";


export class GetUserEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointsResponse" })
  endpointsResponse: EndpointsResponse;
}
