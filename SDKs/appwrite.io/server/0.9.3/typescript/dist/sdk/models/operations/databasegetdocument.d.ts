import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatabaseGetDocumentPathParams extends SpeakeasyBase {
    collectionId: string;
    documentId: string;
}
export declare class DatabaseGetDocumentSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseGetDocumentRequest extends SpeakeasyBase {
    pathParams: DatabaseGetDocumentPathParams;
    security: DatabaseGetDocumentSecurity;
}
export declare class DatabaseGetDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    document?: Map<string, any>;
}
