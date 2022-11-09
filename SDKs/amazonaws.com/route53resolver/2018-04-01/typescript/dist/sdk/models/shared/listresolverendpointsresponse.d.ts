import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverEndpoint } from "./resolverendpoint";
export declare class ListResolverEndpointsResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverEndpoints?: ResolverEndpoint[];
}
