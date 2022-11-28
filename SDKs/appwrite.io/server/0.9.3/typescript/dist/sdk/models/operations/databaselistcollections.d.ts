import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatabaseListCollectionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class DatabaseListCollectionsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseListCollectionsRequest extends SpeakeasyBase {
    queryParams: DatabaseListCollectionsQueryParams;
    security: DatabaseListCollectionsSecurity;
}
export declare class DatabaseListCollectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    collectionList?: shared.CollectionList;
}
