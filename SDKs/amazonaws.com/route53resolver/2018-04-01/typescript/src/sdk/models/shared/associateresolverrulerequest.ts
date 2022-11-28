import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;

  @SpeakeasyMetadata({ data: "json, name=VPCId" })
  vpcId: string;
}
