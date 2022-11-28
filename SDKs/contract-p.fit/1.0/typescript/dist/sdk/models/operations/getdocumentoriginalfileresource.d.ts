import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDocumentOriginalFileResourcePathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class GetDocumentOriginalFileResourceRequest extends SpeakeasyBase {
    pathParams: GetDocumentOriginalFileResourcePathParams;
}
export declare class GetDocumentOriginalFileResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
