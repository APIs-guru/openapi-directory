import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebHookByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetWebHookByIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetWebHookByIdRequest extends SpeakeasyBase {
    pathParams: GetWebHookByIdPathParams;
    security: GetWebHookByIdSecurity;
}
export declare class GetWebHookByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webHook?: any;
}
