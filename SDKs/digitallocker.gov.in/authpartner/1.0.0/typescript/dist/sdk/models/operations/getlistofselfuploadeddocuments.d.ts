import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListOfSelfUploadedDocumentsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetListOfSelfUploadedDocumentsRequest extends SpeakeasyBase {
    security: GetListOfSelfUploadedDocumentsSecurity;
}
export declare class GetListOfSelfUploadedDocuments401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocuments404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocuments500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    getListOfSelfUploadedDocuments401ApplicationJsonObject?: GetListOfSelfUploadedDocuments401ApplicationJson;
    getListOfSelfUploadedDocuments404ApplicationJsonObject?: GetListOfSelfUploadedDocuments404ApplicationJson;
    getListOfSelfUploadedDocuments500ApplicationJsonObject?: GetListOfSelfUploadedDocuments500ApplicationJson;
    sample?: any;
    statusCode: number;
}
