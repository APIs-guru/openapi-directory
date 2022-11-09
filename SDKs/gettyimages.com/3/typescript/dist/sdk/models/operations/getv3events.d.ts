import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3EventsQueryParams extends SpeakeasyBase {
    fields?: shared.EventDetailFieldValuesEnum[];
    ids?: number[];
}
export declare class GetV3EventsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3EventsRequest extends SpeakeasyBase {
    queryParams: GetV3EventsQueryParams;
    headers: GetV3EventsHeaders;
}
export declare class GetV3EventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
