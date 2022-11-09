import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResolverRuleAssociationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRuleAssociationId" })
  resolverRuleAssociationId: string;
}
