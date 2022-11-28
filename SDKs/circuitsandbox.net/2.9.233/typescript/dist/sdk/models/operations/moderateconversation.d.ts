import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModerateConversationPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class ModerateConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class ModerateConversationRequest extends SpeakeasyBase {
    pathParams: ModerateConversationPathParams;
    security: ModerateConversationSecurity;
}
export declare class ModerateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
