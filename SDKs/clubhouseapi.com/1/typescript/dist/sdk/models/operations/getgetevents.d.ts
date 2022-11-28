import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGetEventsQueryParams extends SpeakeasyBase {
    isFiltered?: boolean;
    page?: number;
    pageSize?: number;
}
export declare class GetGetEventsRequest extends SpeakeasyBase {
    queryParams: GetGetEventsQueryParams;
}
export declare class GetGetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
