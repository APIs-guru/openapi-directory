import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JoinCommunityConversationPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class JoinCommunityConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class JoinCommunityConversationRequest extends SpeakeasyBase {
    pathParams: JoinCommunityConversationPathParams;
    security: JoinCommunityConversationSecurity;
}
export declare class JoinCommunityConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
