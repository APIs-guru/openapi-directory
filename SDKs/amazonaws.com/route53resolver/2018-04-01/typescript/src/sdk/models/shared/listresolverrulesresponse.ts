import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverRule } from "./resolverrule";


export class ListResolverRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverRules", elemType: shared.ResolverRule })
  resolverRules?: ResolverRule[];
}
