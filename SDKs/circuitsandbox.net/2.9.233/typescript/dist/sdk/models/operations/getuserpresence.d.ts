import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPresencePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUserPresenceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetUserPresenceRequest extends SpeakeasyBase {
    pathParams: GetUserPresencePathParams;
    security: GetUserPresenceSecurity;
}
export declare class GetUserPresenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    presence?: any;
    statusCode: number;
}
