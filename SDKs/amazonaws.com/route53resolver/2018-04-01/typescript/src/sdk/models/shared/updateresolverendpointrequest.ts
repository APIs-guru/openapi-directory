import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateResolverEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
