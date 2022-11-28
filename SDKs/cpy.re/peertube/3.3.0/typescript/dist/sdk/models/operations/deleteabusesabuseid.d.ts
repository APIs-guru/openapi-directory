import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAbusesAbuseIdPathParams extends SpeakeasyBase {
    abuseId: number;
}
export declare class DeleteAbusesAbuseIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteAbusesAbuseIdRequest extends SpeakeasyBase {
    pathParams: DeleteAbusesAbuseIdPathParams;
    security: DeleteAbusesAbuseIdSecurity;
}
export declare class DeleteAbusesAbuseIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
