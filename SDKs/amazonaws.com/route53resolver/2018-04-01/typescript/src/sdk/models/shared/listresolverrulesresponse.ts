import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverRule } from "./resolverrule";



export class ListResolverRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverRules", elemType: ResolverRule })
  resolverRules?: ResolverRule[];
}
