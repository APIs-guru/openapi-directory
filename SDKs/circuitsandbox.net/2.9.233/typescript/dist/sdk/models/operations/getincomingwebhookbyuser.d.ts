import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIncomingWebhookByUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetIncomingWebhookByUserQueryParams extends SpeakeasyBase {
    pagesize?: number;
    searchpointer?: string;
}
export declare class GetIncomingWebhookByUserSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetIncomingWebhookByUserRequest extends SpeakeasyBase {
    pathParams: GetIncomingWebhookByUserPathParams;
    queryParams: GetIncomingWebhookByUserQueryParams;
    security: GetIncomingWebhookByUserSecurity;
}
export declare class GetIncomingWebhookByUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    incomingWebhooks?: any[];
    statusCode: number;
}
