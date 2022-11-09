import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateResolverRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;

  @Metadata({ data: "json, name=VPCId" })
  vpcId: string;
}
