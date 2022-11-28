import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Destiny2AwaGetActionTokenPathParams extends SpeakeasyBase {
    correlationId: string;
}
export declare class Destiny2AwaGetActionTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2AwaGetActionTokenRequest extends SpeakeasyBase {
    pathParams: Destiny2AwaGetActionTokenPathParams;
    security: Destiny2AwaGetActionTokenSecurity;
}
export declare class Destiny2AwaGetActionTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
