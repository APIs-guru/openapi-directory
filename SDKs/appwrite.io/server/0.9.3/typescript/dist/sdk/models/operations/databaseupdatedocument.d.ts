import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatabaseUpdateDocumentPathParams extends SpeakeasyBase {
    collectionId: string;
    documentId: string;
}
export declare class DatabaseUpdateDocumentRequestBody extends SpeakeasyBase {
    data: Map<string, any>;
    read?: string[];
    write?: string[];
}
export declare class DatabaseUpdateDocumentSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseUpdateDocumentRequest extends SpeakeasyBase {
    pathParams: DatabaseUpdateDocumentPathParams;
    request?: DatabaseUpdateDocumentRequestBody;
    security: DatabaseUpdateDocumentSecurity;
}
export declare class DatabaseUpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    document?: Map<string, any>;
}
