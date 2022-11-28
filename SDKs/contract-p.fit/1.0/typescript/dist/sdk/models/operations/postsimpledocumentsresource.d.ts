import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSimpleDocumentsResourceRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostSimpleDocumentsResourceRequestBody extends SpeakeasyBase {
    file: PostSimpleDocumentsResourceRequestBodyFile;
    inboxId?: string;
    keyValueFlag?: boolean;
}
export declare class PostSimpleDocumentsResourceRequest extends SpeakeasyBase {
    request: PostSimpleDocumentsResourceRequestBody;
}
export declare class PostSimpleDocumentsResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
