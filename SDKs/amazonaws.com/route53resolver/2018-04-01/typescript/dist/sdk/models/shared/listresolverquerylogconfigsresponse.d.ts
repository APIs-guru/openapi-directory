import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";
export declare class ListResolverQueryLogConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    resolverQueryLogConfigs?: ResolverQueryLogConfig[];
    totalCount?: number;
    totalFilteredCount?: number;
}
