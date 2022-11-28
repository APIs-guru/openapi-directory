import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatabaseDeleteDocumentPathParams extends SpeakeasyBase {
    collectionId: string;
    documentId: string;
}
export declare class DatabaseDeleteDocumentSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class DatabaseDeleteDocumentRequest extends SpeakeasyBase {
    pathParams: DatabaseDeleteDocumentPathParams;
    security: DatabaseDeleteDocumentSecurity;
}
export declare class DatabaseDeleteDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
