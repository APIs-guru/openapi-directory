import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointSummary } from "./endpointsummary";



export class ListEndpointsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoints", elemType: EndpointSummary })
  endpoints: EndpointSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
