import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAbusesAbuseIdPathParams extends SpeakeasyBase {
    abuseId: number;
}
export declare class PutAbusesAbuseIdRequestBody extends SpeakeasyBase {
    moderationComment?: string;
    state?: number;
}
export declare class PutAbusesAbuseIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutAbusesAbuseIdRequest extends SpeakeasyBase {
    pathParams: PutAbusesAbuseIdPathParams;
    request?: PutAbusesAbuseIdRequestBody;
    security: PutAbusesAbuseIdSecurity;
}
export declare class PutAbusesAbuseIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
