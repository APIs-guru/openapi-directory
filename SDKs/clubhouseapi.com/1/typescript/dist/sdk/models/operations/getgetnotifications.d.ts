import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGetNotificationsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetGetNotificationsRequest extends SpeakeasyBase {
    queryParams: GetGetNotificationsQueryParams;
}
export declare class GetGetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
