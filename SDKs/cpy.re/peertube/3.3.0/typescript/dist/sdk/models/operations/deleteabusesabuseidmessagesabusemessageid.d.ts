import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams extends SpeakeasyBase {
    abuseId: number;
    abuseMessageId: number;
}
export declare class DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest extends SpeakeasyBase {
    pathParams: DeleteAbusesAbuseIdMessagesAbuseMessageIdPathParams;
    security: DeleteAbusesAbuseIdMessagesAbuseMessageIdSecurity;
}
export declare class DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
