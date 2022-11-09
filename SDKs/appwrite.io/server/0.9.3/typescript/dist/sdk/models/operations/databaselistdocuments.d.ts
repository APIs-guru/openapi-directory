import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatabaseListDocumentsPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class DatabaseListDocumentsQueryParams extends SpeakeasyBase {
    filters?: string[];
    limit?: number;
    offset?: number;
    orderCast?: string;
    orderField?: string;
    orderType?: string;
    search?: string;
}
export declare class DatabaseListDocumentsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseListDocumentsRequest extends SpeakeasyBase {
    pathParams: DatabaseListDocumentsPathParams;
    queryParams: DatabaseListDocumentsQueryParams;
    security: DatabaseListDocumentsSecurity;
}
export declare class DatabaseListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    documentList?: shared.DocumentList;
}
