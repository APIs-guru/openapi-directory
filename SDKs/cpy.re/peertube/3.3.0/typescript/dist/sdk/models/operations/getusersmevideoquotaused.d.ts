import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeVideoQuotaUsedSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeVideoQuotaUsed200ApplicationJson extends SpeakeasyBase {
    videoQuotaUsed?: number;
    videoQuotaUsedDaily?: number;
}
export declare class GetUsersMeVideoQuotaUsedRequest extends SpeakeasyBase {
    security: GetUsersMeVideoQuotaUsedSecurity;
}
export declare class GetUsersMeVideoQuotaUsedResponse extends SpeakeasyBase {
    contentType: string;
    getUsersMeVideoQuotaUsed200ApplicationJsonObject?: GetUsersMeVideoQuotaUsed200ApplicationJson;
    statusCode: number;
}
