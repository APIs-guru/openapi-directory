import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverQueryLogConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigId" })
  resolverQueryLogConfigId: string;
}
