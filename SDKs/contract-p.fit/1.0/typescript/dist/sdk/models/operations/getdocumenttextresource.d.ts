import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDocumentTextResourcePathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class GetDocumentTextResourceRequest extends SpeakeasyBase {
    pathParams: GetDocumentTextResourcePathParams;
}
export declare class GetDocumentTextResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
