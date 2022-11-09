import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResolverEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
