import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResolverRuleAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRuleAssociationId" })
  resolverRuleAssociationId: string;
}
