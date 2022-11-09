import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2SetItemLockStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2SetItemLockStateRequest extends SpeakeasyBase {
    security: Destiny2SetItemLockStateSecurity;
}
export declare class Destiny2SetItemLockStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
