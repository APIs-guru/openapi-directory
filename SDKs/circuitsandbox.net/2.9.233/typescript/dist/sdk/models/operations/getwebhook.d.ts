import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebHookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetWebHookRequest extends SpeakeasyBase {
    security: GetWebHookSecurity;
}
export declare class GetWebHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
