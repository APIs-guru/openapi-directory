import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverRuleAssociation } from "./resolverruleassociation";


export class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverRuleAssociations", elemType: shared.ResolverRuleAssociation })
  resolverRuleAssociations?: ResolverRuleAssociation[];
}
