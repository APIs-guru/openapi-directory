import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateResolverQueryLogConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverQueryLogConfigId" })
  resolverQueryLogConfigId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
