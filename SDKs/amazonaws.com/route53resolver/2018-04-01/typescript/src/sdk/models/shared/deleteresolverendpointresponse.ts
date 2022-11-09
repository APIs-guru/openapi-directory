import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverEndpoint } from "./resolverendpoint";


export class DeleteResolverEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverEndpoint" })
  resolverEndpoint?: ResolverEndpoint;
}
