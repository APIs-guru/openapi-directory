import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomEventsListQueryParams extends SpeakeasyBase {
    page?: string;
}
export declare class CustomEventsListRequest extends SpeakeasyBase {
    queryParams: CustomEventsListQueryParams;
}
export declare class CustomEventsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
