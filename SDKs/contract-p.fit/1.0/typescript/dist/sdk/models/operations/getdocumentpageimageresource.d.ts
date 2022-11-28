import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDocumentPageImageResourcePathParams extends SpeakeasyBase {
    documentId: string;
    pageRange: string;
}
export declare class GetDocumentPageImageResourceRequest extends SpeakeasyBase {
    pathParams: GetDocumentPageImageResourcePathParams;
}
export declare class GetDocumentPageImageResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
