import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";
export declare class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    resolverDnssecConfigs?: ResolverDnssecConfig[];
}
