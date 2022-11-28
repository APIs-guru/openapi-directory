import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresenceQueryParams extends SpeakeasyBase {
    userIds: string[];
}
export declare class GetPresenceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetPresenceRequest extends SpeakeasyBase {
    queryParams: GetPresenceQueryParams;
    security: GetPresenceSecurity;
}
export declare class GetPresenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    presences?: any[];
    statusCode: number;
}
