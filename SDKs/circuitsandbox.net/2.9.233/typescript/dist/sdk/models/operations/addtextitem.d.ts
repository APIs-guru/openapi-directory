import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTextItemPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AddTextItemRequestBody extends SpeakeasyBase {
    attachments?: string[];
    content?: string;
    formMetaData?: string;
    subject?: string;
}
export declare class AddTextItemSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddTextItemRequest extends SpeakeasyBase {
    pathParams: AddTextItemPathParams;
    request?: AddTextItemRequestBody;
    security: AddTextItemSecurity;
}
export declare class AddTextItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItem?: any;
    statusCode: number;
}
