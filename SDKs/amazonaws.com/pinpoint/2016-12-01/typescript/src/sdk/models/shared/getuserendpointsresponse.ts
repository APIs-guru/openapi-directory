import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointsResponse } from "./endpointsresponse";



export class GetUserEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointsResponse" })
  endpointsResponse: EndpointsResponse;
}
