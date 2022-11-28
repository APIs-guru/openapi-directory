import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V2GetTelephonyConversationIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class V2GetTelephonyConversationIdRequest extends SpeakeasyBase {
    security: V2GetTelephonyConversationIdSecurity;
}
export declare class V2GetTelephonyConversationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
