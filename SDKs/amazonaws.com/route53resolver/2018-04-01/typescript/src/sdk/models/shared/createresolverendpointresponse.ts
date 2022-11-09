import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverEndpoint } from "./resolverendpoint";


export class CreateResolverEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverEndpoint" })
  resolverEndpoint?: ResolverEndpoint;
}
