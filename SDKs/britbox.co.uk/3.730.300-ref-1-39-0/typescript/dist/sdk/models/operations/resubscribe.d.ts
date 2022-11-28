import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResubscribePathParams extends SpeakeasyBase {
    platform: string;
}
export declare class ResubscribeQueryParams extends SpeakeasyBase {
    lang?: string;
    planId: string;
}
export declare class ResubscribeSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ResubscribeRequest extends SpeakeasyBase {
    pathParams: ResubscribePathParams;
    queryParams: ResubscribeQueryParams;
    security: ResubscribeSecurity;
}
export declare class ResubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resubscribe200ApplicationJsonObject?: Map<string, any>;
}
