import { SpeakeasyBase } from "../../../internal/utils";
export declare class MaterializedViewDefinition extends SpeakeasyBase {
    enableRefresh?: boolean;
    lastRefreshTime?: string;
    maxStaleness?: string;
    query?: string;
    refreshIntervalMs?: string;
}
