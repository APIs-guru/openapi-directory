import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateResolverQueryLogConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigId" })
  resolverQueryLogConfigId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
