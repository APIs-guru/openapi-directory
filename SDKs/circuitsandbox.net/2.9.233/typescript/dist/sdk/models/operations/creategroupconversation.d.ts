import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupConversationRequestBody extends SpeakeasyBase {
    participants: string[];
    topic?: string;
}
export declare class CreateGroupConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateGroupConversationRequest extends SpeakeasyBase {
    request: CreateGroupConversationRequestBody;
    security: CreateGroupConversationSecurity;
}
export declare class CreateGroupConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
