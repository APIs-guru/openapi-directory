import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatabaseUpdateCollectionPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class DatabaseUpdateCollectionRequestBody extends SpeakeasyBase {
    name: string;
    read?: string[];
    rules?: string[];
    write?: string[];
}
export declare class DatabaseUpdateCollectionSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseUpdateCollectionRequest extends SpeakeasyBase {
    pathParams: DatabaseUpdateCollectionPathParams;
    request?: DatabaseUpdateCollectionRequestBody;
    security: DatabaseUpdateCollectionSecurity;
}
export declare class DatabaseUpdateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    collection?: shared.Collection;
}
