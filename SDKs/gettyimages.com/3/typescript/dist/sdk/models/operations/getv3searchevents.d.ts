import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3SearchEventsQueryParams extends SpeakeasyBase {
    dateFrom?: Date;
    dateTo?: Date;
    editorialSegment?: shared.EditorialSegmentContractEnum;
    fields?: shared.EventFieldValuesEnum[];
    page?: number;
    pageSize?: number;
    phrase?: string;
}
export declare class GetV3SearchEventsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
    giCountryCode?: string;
}
export declare class GetV3SearchEventsRequest extends SpeakeasyBase {
    queryParams: GetV3SearchEventsQueryParams;
    headers: GetV3SearchEventsHeaders;
}
export declare class GetV3SearchEventsResponse extends SpeakeasyBase {
    contentType: string;
    eventsSearchResult?: shared.EventsSearchResult;
    statusCode: number;
}
