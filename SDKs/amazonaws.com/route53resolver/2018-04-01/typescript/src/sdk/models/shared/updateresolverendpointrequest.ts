import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateResolverEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId: string;
}
