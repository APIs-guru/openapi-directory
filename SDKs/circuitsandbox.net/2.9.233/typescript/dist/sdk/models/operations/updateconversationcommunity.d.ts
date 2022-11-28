import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConversationCommunityPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class UpdateConversationCommunityRequestBody extends SpeakeasyBase {
    description?: string;
    topic?: string;
}
export declare class UpdateConversationCommunitySecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateConversationCommunityRequest extends SpeakeasyBase {
    pathParams: UpdateConversationCommunityPathParams;
    request?: UpdateConversationCommunityRequestBody;
    security: UpdateConversationCommunitySecurity;
}
export declare class UpdateConversationCommunityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
