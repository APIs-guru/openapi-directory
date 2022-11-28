import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentResourcePathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class GetDocumentResourceHeaders extends SpeakeasyBase {
    xFields?: string;
}
export declare class GetDocumentResourceRequest extends SpeakeasyBase {
    pathParams: GetDocumentResourcePathParams;
    headers: GetDocumentResourceHeaders;
}
export declare class GetDocumentResourceResponse extends SpeakeasyBase {
    contentType: string;
    documentModelGet?: shared.DocumentModelGet;
    statusCode: number;
}
