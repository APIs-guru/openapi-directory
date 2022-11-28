import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
