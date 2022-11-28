import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatabaseCreateDocumentPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class DatabaseCreateDocumentRequestBody extends SpeakeasyBase {
    data: Map<string, any>;
    parentDocument?: string;
    parentProperty?: string;
    parentPropertyType?: string;
    read?: string[];
    write?: string[];
}
export declare class DatabaseCreateDocumentSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class DatabaseCreateDocumentRequest extends SpeakeasyBase {
    pathParams: DatabaseCreateDocumentPathParams;
    request?: DatabaseCreateDocumentRequestBody;
    security: DatabaseCreateDocumentSecurity;
}
export declare class DatabaseCreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    document?: Map<string, any>;
}
