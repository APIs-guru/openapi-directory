import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
    abuseId: number;
}
export declare class GetAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAbusesAbuseIdMessages200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
    pathParams: GetAbusesAbuseIdMessagesPathParams;
    security: GetAbusesAbuseIdMessagesSecurity;
}
export declare class GetAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
    contentType: string;
    getAbusesAbuseIdMessages200ApplicationJsonObject?: GetAbusesAbuseIdMessages200ApplicationJson;
    statusCode: number;
}
