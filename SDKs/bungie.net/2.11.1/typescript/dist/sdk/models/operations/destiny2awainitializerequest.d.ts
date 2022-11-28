import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Destiny2AwaInitializeRequestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2AwaInitializeRequestRequest extends SpeakeasyBase {
    security: Destiny2AwaInitializeRequestSecurity;
}
export declare class Destiny2AwaInitializeRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
