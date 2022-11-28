import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTextItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class DeleteTextItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DeleteTextItemRequest extends SpeakeasyBase {
    pathParams: DeleteTextItemPathParams;
    security: DeleteTextItemSecurity;
}
export declare class DeleteTextItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItem?: any;
    statusCode: number;
}
