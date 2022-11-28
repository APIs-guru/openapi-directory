import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCommunityConversationRequestBody extends SpeakeasyBase {
    description?: string;
    participants?: string[];
    topic: string;
}
export declare class CreateCommunityConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateCommunityConversationRequest extends SpeakeasyBase {
    request?: CreateCommunityConversationRequestBody;
    security: CreateCommunityConversationSecurity;
}
export declare class CreateCommunityConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
