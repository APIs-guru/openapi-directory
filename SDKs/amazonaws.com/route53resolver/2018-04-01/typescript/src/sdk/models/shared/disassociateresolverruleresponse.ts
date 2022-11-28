import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRuleAssociation } from "./resolverruleassociation";



export class DisassociateResolverRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolverRuleAssociation" })
  resolverRuleAssociation?: ResolverRuleAssociation;
}
