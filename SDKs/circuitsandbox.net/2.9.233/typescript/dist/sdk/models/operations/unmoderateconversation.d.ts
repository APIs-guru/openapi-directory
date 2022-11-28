import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnmoderateConversationPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class UnmoderateConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnmoderateConversationRequest extends SpeakeasyBase {
    pathParams: UnmoderateConversationPathParams;
    security: UnmoderateConversationSecurity;
}
export declare class UnmoderateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
