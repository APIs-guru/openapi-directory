import { SpeakeasyBase } from "../../../internal/utils";
export declare class GaDataColumnHeaders extends SpeakeasyBase {
    columnType?: string;
    dataType?: string;
    name?: string;
}
export declare class GaDataDataTableCols extends SpeakeasyBase {
    id?: string;
    label?: string;
    type?: string;
}
export declare class GaDataDataTableRowsC extends SpeakeasyBase {
    v?: string;
}
export declare class GaDataDataTableRows extends SpeakeasyBase {
    c?: GaDataDataTableRowsC[];
}
export declare class GaDataDataTable extends SpeakeasyBase {
    cols?: GaDataDataTableCols[];
    rows?: GaDataDataTableRows[];
}
/**
 * Information for the view (profile), for which the Analytics data was requested.
**/
export declare class GaDataProfileInfo extends SpeakeasyBase {
    accountId?: string;
    internalWebPropertyId?: string;
    profileId?: string;
    profileName?: string;
    tableId?: string;
    webPropertyId?: string;
}
/**
 * Analytics data request query parameters.
**/
export declare class GaDataQuery extends SpeakeasyBase {
    dimensions?: string;
    endDate?: string;
    filters?: string;
    ids?: string;
    maxResults?: number;
    metrics?: string[];
    samplingLevel?: string;
    segment?: string;
    sort?: string[];
    startDate?: string;
    startIndex?: number;
}
/**
 * Analytics data for a given view (profile).
**/
export declare class GaData extends SpeakeasyBase {
    columnHeaders?: GaDataColumnHeaders[];
    containsSampledData?: boolean;
    dataLastRefreshed?: string;
    dataTable?: GaDataDataTable;
    id?: string;
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    profileInfo?: GaDataProfileInfo;
    query?: GaDataQuery;
    rows?: string[][];
    sampleSize?: string;
    sampleSpace?: string;
    selfLink?: string;
    totalResults?: number;
    totalsForAllResults?: Map<string, string>;
}
