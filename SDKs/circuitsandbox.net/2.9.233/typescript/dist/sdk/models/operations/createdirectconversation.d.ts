import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDirectConversationRequestBody extends SpeakeasyBase {
    participant: string;
}
export declare class CreateDirectConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateDirectConversationRequest extends SpeakeasyBase {
    request: CreateDirectConversationRequestBody;
    security: CreateDirectConversationSecurity;
}
export declare class CreateDirectConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
