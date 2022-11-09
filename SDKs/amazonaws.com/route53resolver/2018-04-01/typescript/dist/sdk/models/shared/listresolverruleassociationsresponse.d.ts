import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverRuleAssociation } from "./resolverruleassociation";
export declare class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverRuleAssociations?: ResolverRuleAssociation[];
}
