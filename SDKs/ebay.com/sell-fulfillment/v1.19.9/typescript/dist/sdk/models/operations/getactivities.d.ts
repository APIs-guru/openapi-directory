import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetActivitiesServerList: readonly ["https://apiz.ebay.com{basePath}"];
export declare class GetActivitiesPathParams extends SpeakeasyBase {
    paymentDisputeId: string;
}
export declare class GetActivitiesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetActivitiesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetActivitiesPathParams;
    security: GetActivitiesSecurity;
}
export declare class GetActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    paymentDisputeActivityHistory?: shared.PaymentDisputeActivityHistory;
    statusCode: number;
}
