import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListOfSelfUploadedDocumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListOfSelfUploadedDocumentsIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetListOfSelfUploadedDocumentsIdRequest extends SpeakeasyBase {
    pathParams: GetListOfSelfUploadedDocumentsIdPathParams;
    security: GetListOfSelfUploadedDocumentsIdSecurity;
}
export declare class GetListOfSelfUploadedDocumentsId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocumentsId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocumentsId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    getListOfSelfUploadedDocumentsId401ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId401ApplicationJson;
    getListOfSelfUploadedDocumentsId404ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId404ApplicationJson;
    getListOfSelfUploadedDocumentsId500ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId500ApplicationJson;
    sample?: any;
    statusCode: number;
}
