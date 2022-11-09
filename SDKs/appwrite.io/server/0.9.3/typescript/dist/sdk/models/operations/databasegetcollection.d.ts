import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatabaseGetCollectionPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class DatabaseGetCollectionSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseGetCollectionRequest extends SpeakeasyBase {
    pathParams: DatabaseGetCollectionPathParams;
    security: DatabaseGetCollectionSecurity;
}
export declare class DatabaseGetCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    collection?: shared.Collection;
}
