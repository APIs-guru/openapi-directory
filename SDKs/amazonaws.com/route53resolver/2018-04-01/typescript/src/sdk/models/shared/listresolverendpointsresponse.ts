import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpoint } from "./resolverendpoint";



export class ListResolverEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpoints", elemType: ResolverEndpoint })
  resolverEndpoints?: ResolverEndpoint[];
}
