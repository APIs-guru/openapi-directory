import { SpeakeasyBase } from "../../../internal/utils";
export declare class RealtimeDataColumnHeaders extends SpeakeasyBase {
    columnType?: string;
    dataType?: string;
    name?: string;
}
/**
 * Information for the view (profile), for which the real time data was requested.
**/
export declare class RealtimeDataProfileInfo extends SpeakeasyBase {
    accountId?: string;
    internalWebPropertyId?: string;
    profileId?: string;
    profileName?: string;
    tableId?: string;
    webPropertyId?: string;
}
/**
 * Real time data request query parameters.
**/
export declare class RealtimeDataQuery extends SpeakeasyBase {
    dimensions?: string;
    filters?: string;
    ids?: string;
    maxResults?: number;
    metrics?: string[];
    sort?: string[];
}
/**
 * Real time data for a given view (profile).
**/
export declare class RealtimeData extends SpeakeasyBase {
    columnHeaders?: RealtimeDataColumnHeaders[];
    id?: string;
    kind?: string;
    profileInfo?: RealtimeDataProfileInfo;
    query?: RealtimeDataQuery;
    rows?: string[][];
    selfLink?: string;
    totalResults?: number;
    totalsForAllResults?: Map<string, string>;
}
