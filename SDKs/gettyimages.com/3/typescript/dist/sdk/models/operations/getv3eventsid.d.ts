import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3EventsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV3EventsIdQueryParams extends SpeakeasyBase {
    fields?: shared.EventDetailFieldValuesEnum[];
}
export declare class GetV3EventsIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3EventsIdRequest extends SpeakeasyBase {
    pathParams: GetV3EventsIdPathParams;
    queryParams: GetV3EventsIdQueryParams;
    headers: GetV3EventsIdHeaders;
}
export declare class GetV3EventsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
