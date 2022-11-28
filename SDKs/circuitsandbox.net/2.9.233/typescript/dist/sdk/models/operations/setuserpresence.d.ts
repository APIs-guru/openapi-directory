import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUserPresenceRequestBody extends SpeakeasyBase {
    clearDnd?: boolean;
    dndUntil?: Date;
    state: string;
    statusMessage?: string;
}
export declare class SetUserPresenceSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class SetUserPresenceRequest extends SpeakeasyBase {
    request: SetUserPresenceRequestBody;
    security: SetUserPresenceSecurity;
}
export declare class SetUserPresenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    presence?: any;
    statusCode: number;
}
