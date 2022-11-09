import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRuleAssociation } from "./resolverruleassociation";


export class GetResolverRuleAssociationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolverRuleAssociation" })
  resolverRuleAssociation?: ResolverRuleAssociation;
}
