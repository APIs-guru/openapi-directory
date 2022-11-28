import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2AddOptionalConversationPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2AddOptionalConversationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2AddOptionalConversationRequest extends SpeakeasyBase {
    pathParams: GroupV2AddOptionalConversationPathParams;
    security: GroupV2AddOptionalConversationSecurity;
}
export declare class GroupV2AddOptionalConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
