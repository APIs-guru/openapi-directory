import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDatabasePathParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class DeleteDatabaseQueryParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class DeleteDatabaseRequest extends SpeakeasyBase {
    pathParams: DeleteDatabasePathParams;
    queryParams: DeleteDatabaseQueryParams;
}
export declare class DeleteDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
