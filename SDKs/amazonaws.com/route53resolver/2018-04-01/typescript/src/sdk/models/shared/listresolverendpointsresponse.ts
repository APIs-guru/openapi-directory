import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverEndpoint } from "./resolverendpoint";


export class ListResolverEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverEndpoints", elemType: shared.ResolverEndpoint })
  resolverEndpoints?: ResolverEndpoint[];
}
