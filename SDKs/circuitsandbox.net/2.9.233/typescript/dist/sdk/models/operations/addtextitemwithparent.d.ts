import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTextItemWithParentPathParams extends SpeakeasyBase {
    convId: string;
    itemId: string;
}
export declare class AddTextItemWithParentRequestBody extends SpeakeasyBase {
    attachments?: string[];
    content?: string;
    formMetaData?: string;
    subject?: string;
}
export declare class AddTextItemWithParentSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddTextItemWithParentRequest extends SpeakeasyBase {
    pathParams: AddTextItemWithParentPathParams;
    request?: AddTextItemWithParentRequestBody;
    security: AddTextItemWithParentSecurity;
}
export declare class AddTextItemWithParentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversationItem?: any;
    statusCode: number;
}
