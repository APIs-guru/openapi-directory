import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostMakePdfRequestBody extends SpeakeasyBase {
    html?: string;
    key: string;
    url?: string;
}
export declare class PostMakePdfRequest extends SpeakeasyBase {
    request: PostMakePdfRequestBody;
}
export declare class PostMakePdfResponse extends SpeakeasyBase {
    contentType: string;
    postMakePdf200ApplicationPdfBinaryString?: Uint8Array;
    statusCode: number;
}
