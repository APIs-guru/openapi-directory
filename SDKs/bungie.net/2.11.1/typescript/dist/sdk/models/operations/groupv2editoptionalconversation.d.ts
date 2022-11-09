import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2EditOptionalConversationPathParams extends SpeakeasyBase {
    conversationId: number;
    groupId: number;
}
export declare class GroupV2EditOptionalConversationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2EditOptionalConversationRequest extends SpeakeasyBase {
    pathParams: GroupV2EditOptionalConversationPathParams;
    security: GroupV2EditOptionalConversationSecurity;
}
export declare class GroupV2EditOptionalConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
