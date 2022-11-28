import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRuleAssociation } from "./resolverruleassociation";



export class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverRuleAssociations", elemType: ResolverRuleAssociation })
  resolverRuleAssociations?: ResolverRuleAssociation[];
}
