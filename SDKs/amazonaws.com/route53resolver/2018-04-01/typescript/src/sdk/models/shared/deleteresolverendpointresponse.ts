import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpoint } from "./resolverendpoint";



export class DeleteResolverEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverEndpoint" })
  resolverEndpoint?: ResolverEndpoint;
}
