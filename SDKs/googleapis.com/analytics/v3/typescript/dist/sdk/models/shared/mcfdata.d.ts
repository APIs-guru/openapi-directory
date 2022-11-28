import { SpeakeasyBase } from "../../../internal/utils";
export declare class McfDataColumnHeaders extends SpeakeasyBase {
    columnType?: string;
    dataType?: string;
    name?: string;
}
/**
 * Information for the view (profile), for which the Analytics data was requested.
**/
export declare class McfDataProfileInfo extends SpeakeasyBase {
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
export declare class McfDataQuery extends SpeakeasyBase {
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
export declare class McfDataRowsConversionPathValue extends SpeakeasyBase {
    interactionType?: string;
    nodeValue?: string;
}
/**
 * A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
**/
export declare class McfDataRows extends SpeakeasyBase {
    conversionPathValue?: McfDataRowsConversionPathValue[];
    primitiveValue?: string;
}
/**
 * Multi-Channel Funnels data for a given view (profile).
**/
export declare class McfData extends SpeakeasyBase {
    columnHeaders?: McfDataColumnHeaders[];
    containsSampledData?: boolean;
    id?: string;
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    profileInfo?: McfDataProfileInfo;
    query?: McfDataQuery;
    rows?: McfDataRows[][];
    sampleSize?: string;
    sampleSpace?: string;
    selfLink?: string;
    totalResults?: number;
    totalsForAllResults?: Map<string, string>;
}
