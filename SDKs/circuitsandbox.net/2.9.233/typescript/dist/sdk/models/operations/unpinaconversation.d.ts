import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnPinAConversationPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class UnPinAConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnPinAConversationRequest extends SpeakeasyBase {
    pathParams: UnPinAConversationPathParams;
    security: UnPinAConversationSecurity;
}
export declare class UnPinAConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
