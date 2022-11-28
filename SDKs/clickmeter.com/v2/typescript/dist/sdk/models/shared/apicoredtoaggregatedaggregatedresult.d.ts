import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
    activityDay?: string;
    commissionsCost?: number;
    conversionsCost?: number;
    conversionsValue?: number;
    convertedClicks?: number;
    entityData?: Map<string, any>;
    entityId?: string;
    fromDay?: string;
    hourlyBreakDown?: Map<string, ApiCoreDtoAggregatedAggregatedResult>;
    lastHitDate?: string;
    spiderHitsCount?: number;
    toDay?: string;
    totalClicks?: number;
    totalViews?: number;
    uniqueClicks?: number;
    uniqueConversions?: number;
    uniqueViews?: number;
}
