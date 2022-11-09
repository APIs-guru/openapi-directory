import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatabaseDeleteCollectionPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class DatabaseDeleteCollectionSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseDeleteCollectionRequest extends SpeakeasyBase {
    pathParams: DatabaseDeleteCollectionPathParams;
    security: DatabaseDeleteCollectionSecurity;
}
export declare class DatabaseDeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
