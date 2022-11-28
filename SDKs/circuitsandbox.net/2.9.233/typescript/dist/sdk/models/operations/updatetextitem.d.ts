import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTextItemPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class UpdateTextItemRequestBody extends SpeakeasyBase {
    attachments?: string[];
    content?: string;
    formMetaData?: string;
    subject?: string;
}
export declare class UpdateTextItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateTextItemRequest extends SpeakeasyBase {
    pathParams: UpdateTextItemPathParams;
    request?: UpdateTextItemRequestBody;
    security: UpdateTextItemSecurity;
}
export declare class UpdateTextItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItem?: any;
    statusCode: number;
}
