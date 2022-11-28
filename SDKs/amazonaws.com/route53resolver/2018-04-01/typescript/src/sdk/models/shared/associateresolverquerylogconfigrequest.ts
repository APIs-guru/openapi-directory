import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateResolverQueryLogConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigId" })
  resolverQueryLogConfigId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
