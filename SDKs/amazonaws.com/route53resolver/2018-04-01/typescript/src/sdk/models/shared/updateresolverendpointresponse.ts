import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpoint } from "./resolverendpoint";



export class UpdateResolverEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverEndpoint" })
  resolverEndpoint?: ResolverEndpoint;
}
