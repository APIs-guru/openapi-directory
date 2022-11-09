import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateResolverRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;

  @Metadata({ data: "json, name=VPCId" })
  vpcId: string;
}
