import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDatabaseUserPathParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class DeleteDatabaseUserQueryParams extends SpeakeasyBase {
    databaseName: string;
    userName: string;
}
export declare class DeleteDatabaseUserRequest extends SpeakeasyBase {
    pathParams: DeleteDatabaseUserPathParams;
    queryParams: DeleteDatabaseUserQueryParams;
}
export declare class DeleteDatabaseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
