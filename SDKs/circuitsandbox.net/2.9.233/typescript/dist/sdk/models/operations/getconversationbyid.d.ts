import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationbyIdPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class GetConversationbyIdSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetConversationbyIdRequest extends SpeakeasyBase {
    pathParams: GetConversationbyIdPathParams;
    security: GetConversationbyIdSecurity;
}
export declare class GetConversationbyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
