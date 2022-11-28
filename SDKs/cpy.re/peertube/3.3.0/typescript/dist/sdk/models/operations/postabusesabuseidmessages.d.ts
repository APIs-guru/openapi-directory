import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAbusesAbuseIdMessagesPathParams extends SpeakeasyBase {
    abuseId: number;
}
export declare class PostAbusesAbuseIdMessagesRequestBody extends SpeakeasyBase {
    message: string;
}
export declare class PostAbusesAbuseIdMessagesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostAbusesAbuseIdMessagesRequest extends SpeakeasyBase {
    pathParams: PostAbusesAbuseIdMessagesPathParams;
    request: PostAbusesAbuseIdMessagesRequestBody;
    security: PostAbusesAbuseIdMessagesSecurity;
}
export declare class PostAbusesAbuseIdMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
