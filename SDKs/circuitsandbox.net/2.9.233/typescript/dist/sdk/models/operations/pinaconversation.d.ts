import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PinAConversationPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class PinAConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class PinAConversationRequest extends SpeakeasyBase {
    pathParams: PinAConversationPathParams;
    security: PinAConversationSecurity;
}
export declare class PinAConversationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
