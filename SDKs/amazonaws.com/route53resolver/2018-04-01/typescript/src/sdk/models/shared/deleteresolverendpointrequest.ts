import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResolverEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
