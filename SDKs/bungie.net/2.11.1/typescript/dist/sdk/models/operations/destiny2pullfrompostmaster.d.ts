import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2PullFromPostmasterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2PullFromPostmasterRequest extends SpeakeasyBase {
    security: Destiny2PullFromPostmasterSecurity;
}
export declare class Destiny2PullFromPostmasterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
