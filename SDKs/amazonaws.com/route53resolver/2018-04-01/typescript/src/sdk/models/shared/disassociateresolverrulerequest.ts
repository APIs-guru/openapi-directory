import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateResolverRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRuleId" })
  resolverRuleId: string;

  @SpeakeasyMetadata({ data: "json, name=VPCId" })
  vpcId: string;
}
