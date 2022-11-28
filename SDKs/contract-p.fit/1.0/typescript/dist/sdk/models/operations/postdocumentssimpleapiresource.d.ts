import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostDocumentsSimpleApiResourcePathParams extends SpeakeasyBase {
    inboxId: string;
}
export declare class PostDocumentsSimpleApiResourceRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostDocumentsSimpleApiResourceRequestBody extends SpeakeasyBase {
    file: PostDocumentsSimpleApiResourceRequestBodyFile;
    hints?: string;
    keyValueFlag?: boolean;
    sync?: boolean;
}
export declare class PostDocumentsSimpleApiResourceRequest extends SpeakeasyBase {
    pathParams: PostDocumentsSimpleApiResourcePathParams;
    request: PostDocumentsSimpleApiResourceRequestBody;
}
export declare class PostDocumentsSimpleApiResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
