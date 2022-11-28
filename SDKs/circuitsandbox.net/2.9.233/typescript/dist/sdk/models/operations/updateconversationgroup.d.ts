import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConversationGroupPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class UpdateConversationGroupRequestBody extends SpeakeasyBase {
    topic?: string;
}
export declare class UpdateConversationGroupSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateConversationGroupRequest extends SpeakeasyBase {
    pathParams: UpdateConversationGroupPathParams;
    request?: UpdateConversationGroupRequestBody;
    security: UpdateConversationGroupSecurity;
}
export declare class UpdateConversationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
