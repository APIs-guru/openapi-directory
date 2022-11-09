import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRule } from "./resolverrule";
export declare class ListResolverRulesResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverRules?: ResolverRule[];
}
