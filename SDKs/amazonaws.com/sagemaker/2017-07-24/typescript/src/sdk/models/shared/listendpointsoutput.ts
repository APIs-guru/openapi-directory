import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointSummary } from "./endpointsummary";


export class ListEndpointsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoints", elemType: shared.EndpointSummary })
  endpoints: EndpointSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
