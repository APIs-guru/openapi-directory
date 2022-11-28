import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFlagItemPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class GetFlagItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetFlagItemRequest extends SpeakeasyBase {
    pathParams: GetFlagItemPathParams;
    security: GetFlagItemSecurity;
}
export declare class GetFlagItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItems?: any[];
    statusCode: number;
}
