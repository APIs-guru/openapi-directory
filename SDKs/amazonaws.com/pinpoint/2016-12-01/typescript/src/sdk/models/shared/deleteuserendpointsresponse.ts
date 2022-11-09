import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointsResponse } from "./endpointsresponse";


export class DeleteUserEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointsResponse" })
  endpointsResponse: EndpointsResponse;
}
